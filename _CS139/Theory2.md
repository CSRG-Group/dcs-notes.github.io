---
layout: CS139
title: Web Servers
math: true
part: true
---

# Static Websites vs Dynamic Websites

## Static Websites

The user makes a page request the sever runs a script and returns the requested page to the user as fixed HTML.

## Dynamic Websites

__Processing occurs on the clients machine__

The user makes a page request the sever runs a script and returns the requested page to the user as HTML and JavaScript.

The JavaScript then may make additional requests to the server and updates
the web page accordingly.

# Client server Model

## Client server Model
    
The client requests data from a server that then then responds

## Peer to Peer

Devices are both requesting an serving data concurrently 

# Data centers

## Servers

server's can have many different uses

* Web
* Application
* Database
* Mail
* Media
* Authentication

## Support Hardware

Data centers contain hardware to support and maintain the servers:

* Server racks
* backup servers
* Air conditioning
* Backup generators
* UPS (uninterruptible power supply (Batteries))

## Data duplication

In data centers data is duplicated so that if a server breaks then another
server can take over and continue to provide the data

# The internet

## Communication
The majority of data traves through wires and cables.

Undersea cables are the primary way for continental communication

Satellites and other communication methods may be used but this is generally rare.

## Data Locality
Generally the shortest path is used to obtain data if data is in the UK requests and information typically will not leave the country. If the data is in America then a request will be mad to America. The shortest path is not guaranteed as the internet is a web many different paths exist.

## Packets

Packet's are addressed and then routed to the correct location. Packets are transmitted across many computers on the way to the destination

## Routing

Routing involves checking if the destination is known to a computer and then directing the traffic in the correct location, if the location is not known then another computer higher up the chain is asked.

# Mobile Web applications

Phone and tablets have many constraints
* lacks hover
* lack processing power
* lack screen sizes
* variety of screen sizes

However rather than having a dedicated web app browser apps can be made 
to run in small browsers on the phone and websites can be converted over.