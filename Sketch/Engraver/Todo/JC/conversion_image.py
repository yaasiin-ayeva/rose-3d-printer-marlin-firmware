# Script for converting an image from PNG to SVG

from PIL import Image

#file = "test.png"
file = "kiruna400.png"

x_max_plateau = 330 #mm
y_max_plateau = 300 #mm
moving_speed = 3000 #mm/min
working_speed = 4000 #mm/min
mm_per_pix = 0.2 #depends on the thickness of the engraver
P_max = 150 #power of engraving for a black pixel (r,g,b = 0,0,0)
P_min = 5 #power of engraving for a white pixel (r,g,b = 255,255,255)


def power(Pmin : int, Pmax : int, pixel_intensity : int) -> int:
    """Fonction that compute the power to provite to the laser in function of the pixel intensity.
    """
    if(pixel_intensity > 255 or pixel_intensity < 0):
        raise ValueError("Wrong Pixel Value : " + str(pixel_intensity))
    else:
        return int(Pmin + int(255 - pixel_intensity) / 255 * (Pmax - Pmin))
        
def getPixValue(pixels, x : int, y : int) -> int:
    if type(pixels[x,y]) == type(1):
        return pixels[x,y]
    elif len(pixels[x,y]) == 3:
        if pixels[x,y][0] == pixels[x,y][1] and pixels[x,y][0] == pixels[x,y][2]:
            return pix[x,y][0]
        else:
            print("Error : Picture is not black and white")
            raise ValueError("Picture is not black and white")
            return


im = Image.open(file) # Can be many different formats.
pix = im.load()

with open("image.gcode", "w") as filout:
    filout.write("M106 P1 S0\n") #force the laser to be at 0
    filout.write("G28\n") #return home
    filout.write("G90\n") #define absolute positionning
    filout.write("G21\n\n") #define unit : milimeters

    print(str(im.size))
    if im.size[0] * mm_per_pix > x_max_plateau :
        print("image size greater than the width of the plate! (in x)")
    elif im.size[1] * mm_per_pix > y_max_plateau :
        print("image size greater than the width of the plate! (in y)")
        
    else :
        x_min_image = x_max_plateau/2 - im.size[0]*mm_per_pix/2
        x_max_image = x_min_image + im.size[0]*mm_per_pix
        y_min_image = y_max_plateau/2 - im.size[1]*mm_per_pix/2
        y_max_image = y_min_image + im.size[1]*mm_per_pix
        
        filout.write("G1 F" + str(moving_speed) + "\n")
        filout.write("G1 X" + str(x_min_image) + " Y" + str(y_min_image) + "\n")
        filout.write("G1 F" + str(working_speed) + "\n")
        
        
        for y in range(0, im.size[1], 2) :
            for x in range(0, im.size[0], 1) :
                filout.write("G1 X{:.2f} Y{:.2f}\n".format(x_min_image + x * mm_per_pix, y_min_image + y * mm_per_pix))
                valeur_pixel = getPixValue(pix, im.size[0] -1 - x, y)
                P = power(P_min, P_max, valeur_pixel)
                filout.write("M106 P1 S" + str(P) + "\n")
                #you have to reverse the x's so that the image appears in the right direction.
                #print("x = {:>3d} y = {:>3d}  pixel : {:>3d}  power : {:>3d}".format(x, y, valeur_pixel, P))
                
            if y < im.size[1] - 1:
                y = y + 1 #on fait la ligne retour dans l'autre sens.
                for x in range(im.size[0] - 1, -1, -1) :
                    #filout.write("G1 X" + str(x_min_image + x * mm_per_pix) + " Y" + str(y_min_image + y * mm_per_pix) + "\n")
                    filout.write("G1 X{:.2f} Y{:.2f}\n".format(x_min_image + x * mm_per_pix, y_min_image + y * mm_per_pix))
                    valeur_pixel = getPixValue(pix, im.size[0] -1 - x, y)
                    P = power(P_min, P_max, valeur_pixel)
                    #P = power(P_min, P_max, pix[im.size[0] -1 - x,y][0])
                    filout.write("M106 P1 S" + str(P) + "\n")
                    #you have to reverse the x's so that the image appears in the right direction.
                    #print("x = {:>3d} y = {:>3d}  pixel : {:>3d}  power : {:>3d}".format(x, y, valeur_pixel, P))
                
        filout.write("\n\nM106 P1 S0\n")
        filout.write("G1 F" + str(moving_speed) + "\n")
        filout.write("G28\n") #return home
        
        temps_gravure = (x_max_image - x_min_image) / working_speed * im.size[1]
        print("temps de gravure : {:.0f} min".format(temps_gravure))
        print("taille de gravure  x : {:.1f}  y : {:.1f}".format(x_max_image - x_min_image, y_max_image - y_min_image))
