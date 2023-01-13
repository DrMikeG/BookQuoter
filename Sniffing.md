So, I've taken delivery of a nRF52840 Dongle from Nordic.

Which means I should be able to use the guide here: https://hackaday.com/2021/03/23/a-crash-course-on-sniffing-bluetooth-low-energy/

to sniff from the ScanMaker.

I'm really curious to see how this works.



# Video 1

Link to Nordic site: https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_sniffer_ble%2FUG%2Fsniffer_ble%2Fintro.html

Is mine preloaded with the necessary bluetooth firmware?

## Software

Downloaded an installed Wireshark 4.0.2 - default options

Already have python installed and on path

Download nRF sniffer for bluetooth.
C:\Program Files\nrf_sniffer_for_bluetooth_le_4.1.1

> Programming the nRF Sniffer firmware
You must connect a DK or dongle running the nRF Sniffer firmware to your computer to be able to use the nRF Sniffer for Bluetooth LE.

I'm hoping mine already has the firmware, so skipping this step.


### Installing the nRF Sniffer capture tool

The nRF Sniffer for Bluetooth® LE software is installed as an external capture plugin in Wireshark.

```
C:\Program Files\nrf_sniffer_for_bluetooth_le_4.1.1\extcap>py -3 -m pip install -r requirements.txt
Requirement already satisfied: pyserial>=3.5 in c:\users\gibbens\appdata\local\programs\python\python310\lib\site-packages (from -r requirements.txt (line 1)) (3.5)
Requirement already satisfied: psutil in c:\users\gibbens\appdata\local\programs\python\python310\lib\site-packages (from -r requirements.txt (line 2)) (5.8.0)
```


I followed the instructions - the only thing I can't see is the dongle on a COM port.
Maybe I do need to install the firmware.

https://infocenter.nordicsemi.com/topic/ug_sniffer_ble/UG/sniffer_ble/programming_firmware.html

The pulsing red light my dongle was displaying when first plugged in indicated it was in boot loader mode.
I followed the instructions to program it with sniffer_nrf52840dongle_nrf52840_4.1.1.hex and now it is showing up on com18 within wireshark.

# Video 2

Hold for three seconds to turn on device.

Scanner serial number 205C36624155
Scanner name PenScanBLE3ACEE8

Advertised using scanner app: A0:6C:65:3A:CE:E8
                    A0: [1010 0000]
    Advertising Address: TexasIns_3a:ce:e8 (a0:6c:65:3a:ce:e8)
    Advertising Data
        Flags
            Length: 2
            Type: Flags (0x01)
            000. .... = Reserved: 0x0
            ...0 .... = Simultaneous LE and BR/EDR to Same Device Capable (Host): false (0x0)
            .... 0... = Simultaneous LE and BR/EDR to Same Device Capable (Controller): false (0x0)
            .... .1.. = BR/EDR Not Supported: true (0x1)
            .... ..1. = LE General Discoverable Mode: true (0x1)
            .... ...0 = LE Limited Discoverable Mode: false (0x0)
        128-bit Service Class UUIDs
            Length: 17
            Type: 128-bit Service Class UUIDs (0x07)
            Custom UUID: 7c6b5200-a002-b001-c001-0709147c6b52 (Unknown)
    CRC: 0x8ca79b

# Reading the Primer

> This first version of Bluetooth technology, used in those very first ever Bluetooth products is known 
more formally as Bluetooth BR (Basic Rate). It offered a raw data rate at the physical layer of 1 million 
bits per second (1 mb/s).
Later, a faster version of Bluetooth technology known as Bluetooth BR/EDR (Enhanced Data Rate) was 
defined. It offered a raw data rate of 2 mb/s but was still designed for use cases involving two devices 
exchanging data directly between them.
Bluetooth Low Energy (LE) first materialized in version 4.0 of the Bluetooth Core Specification1
. This 
was a new version of Bluetooth technology which rather than replace its predecessor, Bluetooth BR/
EDR, sat alongside it as an alternative with capabilities and qualities that made it perfect for a new 
generation of products and the ability to meet new and challenging technical and 
functional requirements.

# BLE primer

**Isochronous Adaptation Layer (ISOAL)**

Allows different frame durations to be used by devices using isochronous 
communication. 
Performs segmentation and reassembly of framed PDUs or fragmentation and 
recombination of unframed PDUs.

**Logical Link Control and Adaptation Protocol (L2CAP)**

Acts as a protocol multiplexer within the host, ensuring protocols are serviced by the 
appropriate host component.
Performs segmentation and reassembly of PDUs/SDUs between the  layer below and 
the layer above L2CAP.

**Access Address**
The access address is used by receivers to differentiate signals from background noise and to determine the relevance or otherwise of a packet
to the receiving device. For example, a pair of connected devices exchange packets with the same randomly allocated access address. Devices not participating in the connection will ignore such packets since the access address is not one that is relevant to them. Similarly, all legacy advertising packets use the same access address with a value of 0x8E89BED6 which indicates that these packets may be received by all devices.

The PDU field of Link Layer packets may contain a variety of different Protocol Data Units (PDUs) depending on how Bluetooth LE is being used. 
The PDU field may be encrypted in which case it includes a Message Integrity Check field which protects against the PDU being tampered with. 


Bluetooth LE devices have an address which is used in some link layer air interface packets as a device identifier. A device address is 48-bits in length and several types are defined. 

7.5.1 Public Device Addresses
Public devices addresses are allocated by the Institute of Electrical and Electronics Engineers (IEEE).
7.5.2 Random Device Addresses
Random device addresses are randomly allocated but values must satisfy rules that are stated in the Bluetooth Core Specification. There are three sub-types of random device address namely static, private resolvable and private non-resolvable.


A device may establish a connection with an advertising device by responding to a received 
advertising packet with a PDU that requests a connection. A number of parameters are specified in 
the request. Amongst these parameters are access address, connection interval, peripheral latency, 
supervision timeout and channel map. 



bluetooth.addr_str

[Service UUID: 7c6b5200a002b001c0010709147c6b52]

https://reverseengineering.stackexchange.com/questions/27688/open-unknown-image-format-probably-a-raw-image

