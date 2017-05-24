void setup(){
   Serial.begin(9600);
   pinMode(7,OUTPUT);
   pinMode(8,INPUT);
}
 
void loop(){
    digitalWrite(7,HIGH);
    int reading= digitalRead(8);
    Serial.println(reading);
   // delay (2000);
   // Serial.println('SECTION');
    //Serial.print(digitalRead(8));  
}
