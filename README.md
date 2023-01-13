# BookQuoter

This uses html 5 to get a picture.

https://youtu.be/dbrez37HlJM

Can I repost it to a local URL and get it into python?



https://medium.com/@draj0718/text-recognition-and-extraction-in-images-93d71a337fc8

https://pyimagesearch.com/2018/09/17/opencv-ocr-and-text-recognition-with-tesseract/

https://web.dev/getusermedia-intro/

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas


https://learn.adafruit.com/circuitpython-nrf52840/bluetooth-basics

> ## Bluetooth Terms

> **Central** - The host computer. This is often a mobile device such as a phone or tablet, or it could be a desktop or laptop.

> **Peripheral** - The connected device. Examples of peripherals are: heart rate monitor, smart watch, or fitness tracker. 

> **The CircuitPython code we have so far is designed to make the Adafruit nRF52840 devices work as peripherals.**

> **Advertising** - Information sent by the peripheral during connection set up. When a device advertises, it is transmitting the name of the device and describing its capabilities. The central looks for an advertising peripheral to connect to, and uses that information to determine what the peripheral is capable of.

> **Service** - A function the peripheral provides. The peripheral advertises its services. A really common service that we use is the UART service, which acts like a hardware UART and is a way of bidirectionally sending information to and from devices. 

> **Packet** - Data transmitted by a device. BLE devices and host computers transmit and receive data in small bursts called packets.

> ## Making a Bluetooth Connection
> To use these terms in the context of connecting to your Adafruit nRF52840:

> You run CircuitPython code that makes your board act as a peripheral by advertising its name and the services it's capable of.
> You start up Adafruit's Bluefruit LE Connect app on an Android or iOS device in central mode, that device becomes the central, and begins listening for the peripheral.
You set up the connection between the nRF52840 peripheral and the Bluefruit LE Connect app, and the app discovers the details about the services that the peripheral is capable of.
Once this connection is made, you can use CircuitPython code to read packets sent from the Bluefruit LE Connect app to your nRF52840 board. For example, you can receive data describing screen button presses or RGB color values.


https://learn.adafruit.com/circuitpython-ble-libraries-on-any-computer

> The Adafruit Blinka bleio library makes this possible. It is a regular Python library that runs on desktop Python, not on CircuitPython boards. It re-implements the _bleio module that is part of CircuitPython: all our BLE libraries are ultimately based on _bleio.

> The Blinka bleio library only supports acting in a BLE central role. You can connect to peripheral devices, such as heart rate monitors, pulse oximeters, bicycle sensors, etc., but you cannot act as a peripheral yourself with this code. #