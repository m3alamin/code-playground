from . import opoop

class Wpoop(opoop.Opoop):

  def __init__(self, x, y):
    self.x = x
    self.y = y

  def wadding(self):
    return self.x * self.y
