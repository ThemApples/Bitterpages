+++
description = "ProfilePic"
tags = ["Development", "golang"]
categories = ["Development", "GoLang"]
draft = false
+++

 was having trouble with getting a profile picture working because im still new to the hugo Software. I attempted to implement my previous knowledge of web development and leave the 
the png file in my main repository. However, that did not resolve the issue because the image couldnt be seen by the system. 

I did do some quick troubleshooting by using a solid color and naming profile.png. 
Then going to developers tools, under any settings, right clicking on the profile picture
and "inspecting element".

This Revealed that there was no picture that the website could see. I spent around 5 minute moving different locations and connecting to the image. However, No luck. 

I did some quick google search and found the below link:
https://discourse.gohugo.io/t/image-is-not-shown-or-broken-on-webpage/22584/7

It turn it needs to under the static location and did so. 
Ran the command to test it.

```go {linenos=inline}
Hugo Server
```

Finally, it started working.

```
Issue:
 - Nothing yet

