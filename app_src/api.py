import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

from app_src import create_app 

app = create_app()