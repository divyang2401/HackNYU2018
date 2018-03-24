#HackNYU2018
##Accessibility & Assistive Technology
*Journal for Caretaker of Austistic Patients*

## How Do I Perform Tone Analysis?
Tested working with Python2 and pip 9.0.1

### Requirements

* Python2 or Python3
* Pip
* SciPy
* Vokatori SDK https://developers.vokaturi.com/downloads/sdk

### How to install Vokaturi

1. Install the SDK from https://developers.vokaturi.com/downloads/sdk
2. Move the appropriate Vokaturi library found in the `lib` into the `/api` folder. If you have Linux u install the Linux library, if Mac you install the .dylib, etc.
3. Update the `tone-analyzer.py` file to import the Vokaturi library via relative path. For example:

```Python
Vokaturi.load("./OpenVokaturi-3-0-linux64.so")
```

### How to run the Tone Analysis
You need Vokaturi to get this to work.

```sh
$ git clone https://github.com/myy233/HackNYU2018.git
$ sudo pip install scipy
$ cd api
$ python tone-analyzer.py hello.wav
```

## How Do I Use A Different Audio File?

* Just record some audio and save it as a `.wav` file in the `api` folder

## Help Figuring Out Which Vokaturi Library to Install Based on My Operating System

The OpenVokaturi libraries

The open-source libraries for various platforms and processors are in the folder lib.

If you program for the iPhone and iPad, you will want to use the library OpenVokaturi-3-0-iphone.a. It contains machine code for three generations of processors (32-bit ARMv7 and ARMv7s, and 64-bit ARM64), as well as for three generations of iPhone simulators (i386, i686, x86_64). To use the library, just drop it into your Xcode project, in which you also include Vokaturi.h. The lib folder also contains the separate object files, in case you want to produce an app for just one processor.

If you program for Android, you will want to use the library OpenVokaturi-3-0-android.aar. It contains machine code for two generations of processors (32-bit ARMEABI-v7a and 64-bit ARM64-v8a), as well as for 32-bit and 64-bit Android simulators. To use the library, put it in your Android Studio project folder, and write compile(name:'OpenVokaturi-3-0-android', ext:'aar') into the dependencies section of your build.gradle file.

In a C-based application for Windows, you can link statically with OpenVokaturi-3-0-win32.o or OpenVokaturi-3-0-win64.o, and include Vokaturi.h in your project. In a Python-based application for Windows, you would open the shared library OpenVokaturi-3-0-win32.dll or OpenVokaturi-3-0-win64.dll at run-time, using the module Vokaturi.py. In case you get a message about a missing libgcc_s_sjlj-1.dll, this file is included as well, for both 32-bit and 64-bit.

In a C-based application for the Mac, you can link statically with OpenVokaturi-3-0-mac.a, which contains both 32-bit and 64-bit machine code. To use it, just drop it into your Xcode project, in which you also include Vokaturi.h. In a Python-based application for the Mac, you would open the shared library OpenVokaturi-3-0-mac.dylib, which contains both 32-bit and 64-bit machine code, using the module Vokaturi.py.

In a C-based application for i686 or x86_64 Linux, you can link statically with OpenVokaturi-3-0-linux32.o or OpenVokaturi-3-0-linux64.o, and include Vokaturi.h in your project. In a Python-based application for Linux, you would open the shared library OpenVokaturi-3-0-linux32.so or OpenVokaturi-3-0-linux64.so at run-time, using the module Vokaturi.py.

In a C-based application for ARM64 Linux (e.g. Odroid), you can link statically with the object file OpenVokaturi-3-0-linux_arm64.o, and include Vokaturi.h in your project. If you want to use this in a Python-based application for Linux, you will have to convert the object file into a shared library with gcc -shared OpenVokaturi-3-0-linux_arm64.o -o OpenVokaturi-3-0-linux_arm64.so, and open the shared libary OpenVokaturi-3-0-linux_arm64.so at run-time, using the module Vokaturi.py.
