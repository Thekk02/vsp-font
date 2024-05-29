import sys
import webbrowser
def Fileread(url):
    webbrowser.open(url)

if __name__ == '__main__':
    Fileread(sys.argv[1])