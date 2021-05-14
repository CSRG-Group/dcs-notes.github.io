---
layout: CS139
title: Web Architectures and Performance
math: true
part: true
pre: Theory8
nex: Theory10
---
# Three tier Architecture
* Web Tier
    * Handles requests 
    * Serves static assets
    * (apache)
* Application tier
    * Application specific logic
    * (PHP C++ C# ...)
* Database Tier
    * File storage
    * (SQL MongoDB ...)


# Scaling
## Vertical Scaling
An older way of scaling or for small companies

If the older server is too small

Buy a bigger server

Fairly practical 
    * can fit 3TB of RAM in a 1u server
    * a Standard rack is 42u

### Advantages
* Can buy a small system now then expand later
* Minimizes immediate capital expenditure

### Disadvantages
* Whole machine needs to be replaced to scale up
* Replacing the machine leads to downtime
* Harder to scale down

## Horizontal scaling
Separate the database to a separate computer

Multiple servers can be setup to communicate with the single database computer

Load cam be spread across the servers

Any requests are sorted by a __Load Balancer__ to ensure that all server are equally loaded

Load balancing algorithms 
* Round Robin - requests sent to each server in turn
* Weighted round robin - Request sent to each server in turn but also determined by a weighting for each server
* Least active sessions - requests are sent to the most lightly loaded server
### Advantages
* The individual computers are cheaper
* Built in redundancy if a server breaks the others can continue
*  Easily add more servers

### Disadvantages
* higher upfront costs
* More complex systems, More Maintenance needed

## Cloud Based infrastructure
Cloud computing can allow users to rent servers

Servers can be leased by the hour

Software can monitor changes and boot up / shutdown servers to scale with demand

## Caches
Results of heavy computation can be cached

Calculations does nto need to be run again

## Message Queues
Applications hav long running tasks

Warning can take a long time

Applications can drop messages into the queue which are then processed by software which listen's to the queue


# Measuring Performance
There are different Metrics

* End to End response time
    * Time takes form issuing a request to receiving a response
    * measures the application as the user sees it
    * Needs to be done for each request type
    * use JMeter, Apache BEnchmark , siege
* Site Response time
    * Time taken for the server to process a request
* Request Throughput
    * number of requests processed by the server per second
* Test for concurrent users
    * A test on user capacity

__A system under load will perform differently to an idle system__

When specifying performance percentiles are used as targets.

    "95% of all requests should be processed in less than 5 seconds.
    The maximum acceptable processing time is 60 seconds"

Users expect a site ro be responsive.

A poor experience will cause page abandonment. 

## Throughput
How many responses a system can service per unit time

Range of requests

Simulate possible user actions

Each request represents a different proportion of application actions