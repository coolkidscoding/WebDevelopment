![CKCS logo >](./images/ckcslogo.png)
</br>

## Course: **Web Development**

### Lesson 1: **Web Background**

#### How does the internet work? ####

The internet is the backbone of the Web, the technical infrastructure that makes the Web possible.  At the most basic, the internet is a large network of computers which communicate all together.


##### A simple network #####

![simple network](./images/internet-schema-1.png "simple network")

When two computers need to communicate, you have to link them, either physically (with a cable) or wirelessly (with wifi).  All modern computers support that connection.

A network like this is not limited to two computers.  We can connect as many computers as we like but it gets complicated fast.  If you're trying to connect 10 computers you need 45 cables, with nine plugs per computer.

![more complicated network](./images/internet-schema-2.png "more complicated network")

To solve this problem, each computer on a network is connected to a special tiny computer called a _router_.  This router makes sure that a message from one computer arrives at the correct computer.  
Once we add a router to the system, our network of 10 computers only requires 10 cables: a single plug for each computer and a router with 10 plugs.

![router network](./images/internet-schema-3.png "router network")


##### A network of networks #####

What if we wanted to connect hundreds, thousands, billions of computers?  A single router cant scale taht far, but nothing keeps us from connecting routers to other routers.

![router 2 router network](./images/internet-schema-4.png "router to router network")

In this way we can scale infinitely.

![router 2 router 2 router network](./images/internet-schema-5.png "router to router to router network")

Such a network comes very close to what we call the internet.

#### Finding Computers ####

If you want to send a message to a computer you have to specify which one.  Any computer linked to a network has a unique address that identifies it, called an IP (Internet Protocol) address.  It's an address made of a series of four numbers seperated by dots, for example 192.0.2.172.

As human beings we have a hard time remembering that kind of address.  To make things easier, we can alias an IP address with a human-readable name called a _domain name_.  

![ip address](./images/dns-ip.png "ip address")

#### Internet and the Web ####

When we browse the Web with a Web browser, we usually use the domain name to reach a website. Does that mean the Internet and the Web are the same thing? It's not that simple. As we saw, the Internet is a technical infrastructure which allows billions of computers to be connected all together. Among those computers, some computers (called Web servers) can send messages intelligible to web browsers. The Internet is an infrastructure, whereas the Web is a service built on top of the infrastructure. It is worth noting there are several other services built on top of the Internet, such as email and IRC.

---

##### **Cool Kids Coding School 2022, for any questions or comments contact info@coolkidscodingschool.com**
