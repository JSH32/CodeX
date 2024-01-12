# Setting Up the Visual Studio Code Environment

In this guide, you will learn how to install Visual Studio Code, the necessary build tools, and CMake on your system. We'll outline the steps for different operating systems, although the general instructions are similar across platforms.

## Installation of C++ Tools

### Windows

Follow these steps to install the **Build Tools for Visual Studio**:
1. Navigate to the [Visual Studio download page](https://visualstudio.microsoft.com/downloads/).
2. Choose **Visual Studio Community**—a free option for individual developers—and click "Free download."
3. Save the installer file to your computer.

    ![Download Page](../visual_studio/install_1.png)

4. Execute the installer and select the "Desktop development with C++" workload, which includes the necessary MSVC compiler, Windows SDK, and C++ components.

    ![Installer](../visual_studio/install_2.png)

### Linux

For Linux distributions, install the build-essential package which provides the GNU C/C++ compiler and other development tools:
- Ubuntu: `sudo apt update && sudo apt install build-essential`
- Arch Linux: `sudo pacman -Sy base-devel` (Note: The package is `base-devel`, not `build-essential` which is for Debian-based systems.)
- Fedora: `sudo dnf install make automake gcc gcc-c++ kernel-devel`

### macOS

For macOS, install the Xcode command line tools to obtain the required Clang C++ compiler and other essential tools:
```sh
xcode-select --install
```

## Installation of CMake

CMake is an essential suite of open-source tools used to build, test, and package software. It facilitates building and running C++ programs and provides autocompletion in VSCode.

### Windows

1. Download the CMake installer for Windows from the [CMake download page](https://cmake.org/download/).
2. Upon executing the installer, select "Add CMake to the system PATH for all users" or "Add CMake to the system PATH for the current user" during the installation process.

### Linux

Use your distribution's package manager to install CMake. Here are the commands for common distributions:
- Ubuntu: `sudo apt update && sudo apt install cmake`
- Arch Linux: `sudo pacman -Sy cmake`
- Fedora: `sudo dnf install cmake`

### macOS

The easiest way to install CMake on macOS is through [Homebrew](https://brew.sh/):
```sh
brew install cmake
```
For Homebrew installation, visit [https://brew.sh/](https://brew.sh/).

## Installation of Visual Studio Code (VSCode)

VSCode is a versatile and lightweight IDE that supports C++ development. Here's how to install it:

### Windows

1. Access the [VSCode download page](https://code.visualstudio.com/Download) and fetch the Windows installer.
2. Execute the installer and accept the default settings unless you have specific preferences.

### Linux

#### Ubuntu and Debian-Based Distributions

Download the `.deb` package for Debian/Ubuntu from the [VSCode download page](https://code.visualstudio.com/Download).
Then in the terminal:
```sh
cd ~/Downloads
sudo dpkg -i code_*.deb
# Run the following if there are dependency issues:
sudo apt-get install -f
```

#### Fedora, Red Hat, and RPM-Based Distributions

Fetch the `.rpm` package and use the terminal:
```sh
cd path/to/download
sudo dnf install code_*.rpm
```

#### Arch Linux and Arch-Based Distributions

In the terminal, choose from the community repository or the official one for the open-source build (VSCode OSS):
```sh
sudo pacman -Syu code       # For Visual Studio Code
# Or
sudo pacman -Syu code-oss  # For Visual Studio Code - OSS
```

### macOS

1. Navigate to the [VSCode download page](https://code.visualstudio.com/Download) and acquire the macOS version.
2. Open the `.zip` file, which will unpack `Visual Studio Code.app`.
3. Move `Visual Studio Code.app` to your "Applications" folder.
4. Start VSCode from the "Applications" folder or via Spotlight.

## Configuring VSCode Extensions

1. Open up Visual Studio Code.
2. Access the Extensions view by clicking the square icon on the sidebar or using `Ctrl+Shift+X`.
3. Install the following essential extensions:
    - [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) for C/C++ language support
    - [CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake) to enable CMake language features
    - [CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools) to enhance the CMake experience

## Creating Your First C++ Project

Let's put your setup to the test by creating a simple C++ project:

1. Launch VSCode and go to the "File" menu. Choose "Open Folder..." to make a directory for your new project.
2. In your project folder, create a file named `CMakeLists.txt` and configure your project:
    ```cmake
    cmake_minimum_required(VERSION 3.10)
    project(MyFirstProject)
    add_executable(MyFirstProject main.cpp)
    ```
3. Create a `main.cpp` file and paste the code belo:
    ```cpp
    #include <iostream>

    int main() {
        std::cout << "Hello world!" << std::endl;
        return 0;
    }
    ```
4. Press `Ctrl + P` to bring up the command palette and run `> CMake: Configure` to configure your project. (Remember to add each new source file to `add_executable` and reconfigure afterwards.)
5. Use the run button at the bottom of the VSCode window to execute your application.

Congratulations! Your development environment is now set up, and you are ready to dive into C++ programming with Visual Studio Code.