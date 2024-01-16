jQuery(window).ready(function($){

    function AccelerationMaxSpeed(){ 
        var StepSize, Microstepping, BeltPitch, ToothCount;
        Acceleration = parseFloat($("#maxSpeed #acceleration").val());
        Distance = parseInt($("#maxSpeed #distance").val());
        Speed = parseFloat($("#maxSpeed #desiredSpeed").val());

        // graph
        acceleration = Acceleration;
        axisLenght = Distance;
        speed = Speed;

        timeToFullSpeed = speed/acceleration;
        distanceToFullSpeed = (acceleration*timeToFullSpeed*timeToFullSpeed)/2;

        var d2 = [];
        if((axisLenght/2)<= distanceToFullSpeed){
          time = Math.sqrt((axisLenght)/acceleration);
          speed = acceleration*time;
          timeToFullSpeed = speed/acceleration;
          distanceToFullSpeed = (acceleration*timeToFullSpeed*timeToFullSpeed)/2;

        }else{
        d2.push([distanceToFullSpeed, speed]);
        d2.push([axisLenght-distanceToFullSpeed, speed]);

        }

        var d1 = [];

        for (var i = 0; i <= axisLenght/2; i += axisLenght/400) {
          time = Math.sqrt((2*i)/acceleration);
          speed = acceleration*time;
          d1.push([i, speed]);
        }

        decelerationStartsAt = axisLenght-distanceToFullSpeed;

        for (var i = axisLenght/2; i <= axisLenght; i += axisLenght/400) {
          fakeDistance = axisLenght-i;
          time = Math.sqrt((2*fakeDistance)/acceleration);
          speed = acceleration*time;
          d1.push([i, speed]);
        }


        $.plot("#maxAccelerationGraph", [ d1, d2]);

    }

    $("#maxSpeed .change").change(function () {
        AccelerationMaxSpeed();
    });
    AccelerationMaxSpeed();
});