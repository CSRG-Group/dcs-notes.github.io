---
part: true
layout: CS140
title: Introduction to Computer Security
---

## 2 Features of Computer Security

**There is no such thing as absolute computer security.** If we want to know whether a system is secure, there are many questions to ask.

- Security, in which aspects?
  - Secrecy
  - damage prevention
  - ensure services are available
- Security from whom? All people or differentiate users?
  - It is harder to achieve different levels of security from different users.
- Security to what level? Trade off between cost and performance
  - To achieve a higher level of security 
  - more investment
  - more performance degradation

> Part of the reason why there is no 100% security is because there are too many security issues to consider. We can't achieve 100% – the aim is to **reduce** as much as possible. 

**Theory is not the same as practice.** Security is not just about theory but also:

- **Implementation.** How the program is written. Is it accurately implementing theory?
- **Deployment.** Private or public server? How can user input be transferred safely to servers?
- **Maintenance.** Frequent security patches are needed.
- **Parties involved.** Who uses the system and what is their security behaviour? Parties involved have to have secure habits.
- **Location.** Where is the system used? Private or public domain?
- **Temptation.** How tempting is the asset? There will always be black hats trying to attack the system.

> Beautiful cryptography can be regularly compromised by bad implementations (human error).

## CIA Triangle

A security model that defines three key aspects that should be guaranteed at all times

1. **Confidentiality.** No unauthorised disclosure.
2. **Integrity.** No unauthorised change
3. **Availability.** Users are not denied access to resources or have unwarranted delay.

## Case studies

### Malware - The Morris worm

Robert Morris tried to measure the size of the Internet. The worm could get into a computer through rsh, generate a process and invoke the OS commands to obtain certain information about the network. 

#### Worm vs Virus

Both self-replicate and likely to achieve rapid population growth

- Virus - replicate into other executable code and infect it
- Worm - standalone, doesn't need a host program.
- Sometimes they are used interchangeably 

### Denial of service - takes on Georgian blogger

Attackers sends a massive number of requests to access the service sites so that the sites are too busy to serve the requests from the genuine users

### Hacktivism

Used as a protest action against governments/institutions. 

Anonymous took down US government websites: White House, Department of Justice and FBI. Music sites like Universal Music was targeted too. Coordinated, decentralized, very effective.

### Social engineering

Hacking a system doesn't involve technical skills

- Happens by exploiting people's trust
- Con people into divulging personal info such as passwords
  - No technical skill, just social skills
- Kevin Mitnick - notorious hacker in the 80s to 90s, wrote the Art of Deception book.

### Physical security

Russian programmer taken hostage in 2010. People can be threatened, physical locations can be breached, dumpsters can be dived!

> **This is why we say there is no such thing as 100% Com Sec.**

## Basic Terminology

Before we dive into risk analysis methods, we will cover basic terminology in security.

### Asset

> Anything we value enough so that we want to protect it

**Examples**:

- Customer database, web page, source code or executables of programs
- Laptop, mobile phone, staff, customers, consultants. 
- Company reputation

### Vulnerability

> A flaw or weakness in a system's design, implementation, or operation and management that could be exploited to violate the system's security policy. 

**Examples**:

- Weak passwords
- Program bug
- New employee doesn't understand the security policy

### Threat

> A potential for violation of security, which exists when the attacker has the capability and intention to breach security 

*Threat = capability x intent​*

**Examples**

- A hacker discovers a new way to exploit a vulnerability and writes a virus

Evaluation models of threat (Microsoft STRIDE)

| Threat                     | Security Aspect                                              |
| -------------------------- | ------------------------------------------------------------ |
| **Spoofing**               | Authentication                                               |
| **Tampering**              | Integrity                                                    |
| **Repudiation**            | [Non-repudiation](https://www.cryptomathic.com/products/authentication-signing/digital-signatures-faqs/what-is-non-repudiation) - the assurance that no one can deny the validity of something (data, service etc.) |
| **Information disclosure** | Confidentiality                                              |
| **Denial of Service**      | Availability                                                 |
| **Elevation of Privilege** | Authorisation                                                |

### Risk

> An expectation of loss expressed as the **probability** of an actual attack a threat will exploit a vulnerability with a harmful result. 

*Risk = probability x harm = threat x vulnerability x harm*

**Example**:

- Risk of your laptop being trampled by an escaped rhino is small
- Risk of leaving your laptop on the bus could be quite high. 

Here is a [case study](https://www.pilgrimsgroup.com/news.php?id=94) for analysing the threat and risk.

### Attack

> An assault on security that derives from a threat. A threat that has been realised

**Active attack:** Crashing a website through DOS

**Passive attack:** Eavesdrop on the network traffic

Social engineering attack is another type of attack that just requires social skills, no technical skills.

### Countermeasure

> An action that reduces a threat, vulnerability, harm, or by eliminating or preventing the attack or by detecting the attack and reacting with corrective action. Anything that will reduce the violation of the security. 

**Examples:**

- Prevention: firewall, passwords, encryption, backup, training staff etc.
- Detection: Intrusion detection system
- Reaction: Login systems that lock users out after 3 failed attempts. 

### Trust

> "It is impossible to design a security system that is devoid of trust; we have to trust something. Even the person who writes his own security software has to trust his compiler and computer." 
>
> *– Bruce Schneier, Secrets and Lies.*

**Trust is used in many contexts, trusted user, trusted third party, trusted host, trusted systems**

- Security policy for trusted users will be different than other users
- Trust relationship limits our responsibility
  - When we design security mechanism/policy, we will think threat will not come from these trusted entities - so we do not need to think about how to defend against them
- Affects our view of threat and thus the countermeasures we employ
- Trust is also a valuable business asset - it is something that a business would want to protect and maintain. 

## Risk Analysis

**Informal risk analysis.**

- Identify (value) assets.
- Identify vulnerabilities
- Identify threats

### Qualitative analysis

#### Checklist Method

Examples: the **DREAD** model by Microsoft:

**Damage** - how bad would an attack be?

**Reproducibility** - how easy is it to reproduce the attack?

**Exploitability** - how easy is it to launch the attack?

**Affected users** - how many people will be impacted?

**Discoverability** - how easy is it to discover the threat?

#### Mathematical Method

One example of a mathematical method of analysis is **Fault Tree Analysis.** 

You basically list the possible events that can occur , and list the possible causes of it – until the most basic cause.

```yaml
# If its listed it represents there is an OR relationship,
# otherwise an AND relationship is explicitly stated (last line)
# Usually, this is a drawn diagram but I'm lazy.
Car Won't Start:
  Electrical Fault:
    - Broken Wire
    - Starter Faulty
  Control Status:
    - Foot on brake & In Park
```

This can only tell us the probability an attack will occur. Afterwards, we still have to determine the amount of harm that it will cause, and we will get some form of **measurable risk**.

## Analysing Security Incidents

Key questions to ask are: 

- Who is doing it?
- Motivation
- What is the damage - which aspect of security is breached?
  - Not all about divulging secrets
  - Also include DOS, integrity, reputation loss
- What should system security encompass?
  - What elements can be considered to avoid the incident?

**Example of analysis. DoS – Case study 2**

Who is doing it? - Russian government allegedly

Motivation? - Prevent criticism 

What damage? - Availability 

What should system security encompass? - Service provider should have resources available to serve genuine users.

**Example of analysis with terminology. Morris Worm.**

**The Case.** 1988 - Robert Morris exploited a program bug to write a “worm”.

- Considered the first computer “worm” on Internet
- Not intend to cause damage, but to measure the size of Internet
- Get into a computer through **rsh***, generate a process and invoke the OS commands to obtain certain information about the network
- Gradually slow down the computer to be completely useless
- Computers on the network can be infected rapidly

**Outcome.** Rapidly infected 10% of all machines on the Arpanet. Caused the estimated damage of $100 million.

**Analysis.**

- Asset: The computers on the Arpanet
- Vulnerability: rsh comment loophole in Unity OS
- Threat: Robert has the capability because he discovered the loophole. He had the intent because he wrote the program to make use of the loophole
- Attack: Robert ran the worm, and it replicated itself rapidly across the Arpanet
- Risk: (*probability x harm*) *(10% of all machines) x (Money loss)* because of computer slowdown.
- Countermeasure: Robert was charged in court. Applied security patch for the rsh loophole.

