# LÖVE framework - 2D games in Lua

---

## What is Lua?

Lua is a flexible, lightweight scripting language focused around tables. 
Is intended for embedded use in larger applications and it is excellent for storing data as well as code.

---

## What is Love2D?

LOVE2D is a game development framework written in C++. 
It uses Lua as its scripting language and contains modules for graphics, keyboard input, math, audio, windowing, physics, and more.

---

## What is a Game Loop

![Game Loop](https://cs50.harvard.edu/games/2018/notes/0/game_loop.png)

A game loop is an inifnite loop and during every iteration of this loop we repeatedly perform the following set of steps:

- We process the input. We’re constantly checking: has the user pressed a key on the keyboard, moved the joystick, moved/clicked the mouse, etc.?

- We update the game based on this input (i.e., tracking movement, detecting collisions, etc.).

- We re-render anything that was updated so that the user can see visually on the screen that the game has changed and feel a sense of interactivity.

---

## 2D Coodrinate System

![2D Coordinate System](https://cs50.harvard.edu/games/2018/notes/0/2D_coordinate_system.png)

In the context of 2D games, the way of looking at the world is by using the 2D coordinate system.

The 2D coordinate system we’re referring to here is a system in which objects have an X and Y coordinate (X, Y) and are drawn accordingly, with (0,0) being the top-left of the system. 

---

## Important LOVE2D Functions

The function `love.load()`.

```lua
-- Executed once at the begining of the game
-- Used to initialize the game
function love.load()
end
```

The function `love.update()`.

```lua
-- Executed at each frame of the program execution
-- Used to update the state of our game
function love.update(dt)
end
```

The function `love.draw()`.

```lua
-- Called each frame
-- Used to draw things to the screen
function love.draw()
end
```

The function `love.window.setMode(width, height, params)`. is 's dimensions and properties such as vsync, fullscreen, and resizable.

```lua
-- Used to initialize the properties of the window
-- Properties such as width, height, whether or not is fullscreen, resizable
love.window.setMode(width, height, params)

love.window.setMode(1280, 720, {
    fullscreen = false, 
    vsync = true,
    resizable = false
})
```

The function `love.graphics.printf(text, x, y, [width], [align])`.

```lua
-- Shows text to the screen
-- Can align text left, right, or center
love.graphics.printf(text, x, y, [width], [align])
```

The function `love.graphics.setDefaultFilter(min, mag)`.

```lua
-- Sets the texture scaling filter when minimizing and magnifying textures and fonts
-- Default the scaling filter is bilinear
-- Other option is nearest
love.graphics.setDefaultFilter(min, mag)
```

The function `love.event.quit()`.

```lua
-- Terminates the application upon execution
love.event.quit()
```

The function `love.keypressed(key)`.

```lua
-- Executes whenever we press a key
-- Allows us to receive input from the keyboard
function love.keypressed(key)    
end
```

## The push library

push is a simple resolution-handling library that allows you to focus on making your game with a fixed resolution.

It will allow us to think of our game in more low-res terms. 
By using the push library to treat our game as if it were on a 432x243 window, while actually rendering it at our desired 1280x720 window. 

[push Library Repo](https://github.com/Ulydev/push)

<details>
<summary>Setup push</summary>

```lua
-- import the library
push = require "push"

-- window original resoluion
windowWidth, windowHeight = love.window.getDesktopDimensions()

-- virtual resolution
gameWidth, gameHeight = 1080, 720 

push:setupScreen(gameWidth, gameHeight, windowWidth, windowHeight, {fullscreen = true})

function love.draw()
  push:start()
  
  --draw here
  
  push:finish()
end
```
</details>

The function `love.graphics.newFont(path, size)`. 
```lua
-- Loads a font file in memory at a specific path, setting it to a specific size
love.graphics.newFont(path, size)
```

The function `love.graphics.setFont(font)`. 

```lua
-- Sets the current active font to a passed-in font object
love.graphics.setFont(font)
```

The function `love.graphics.clear(r, g, b, a)`.

```lua
-- Wipes the entire screen with a color defined by an RGBA set
love.graphics.clear(r, g, b, a)
```

The function `love.graphics.rectangle(mode, x, y, width, height)`.

```lua
-- Draws a rectangle onto the screen
-- The mode parameter can be set to fill or line
love.graphics.rectangle(mode, x, y, width, height)
```

The function `love.keyboard.isDown(key)`.

```lua
-- Returns true or false depending on whether the specified key is currently held down
love.keyboard.isDown(key)
```

The function `math.randomseed(num)`.

```lua
-- “seeds” the random number generator
math.randomseed(num)
```

The function `os.time()`.

```lua
-- Returns, in seconds, the time since 00:00:00 UTC, January 1, 1970
os.time()
```

The function `math.random(min, max)`.

```lua 
-- Returns a random number, dependent on the seeded random number generator, between min and max, inclusive
math.random(min, max)
```

The function `math.min(num1, num2)`.

```lua
-- Returns the lesser of the two numbers passed in
math.min(num1, num2)
```

The function `math.max(num1, num2)`

```lua
-- Returns the greater of the two numbers passed in
math.max(num1, num2)
```

The function `love.window.setTitle(title)`.

```lua
-- Sets the title of our application window
love.window.setTitle(title)
```

The function `love.timer.getFPS()`

```lua
-- Returns the current FPS
love.timer.getFPS()
```

The function `love.audio.newSource(path, [type])`

```lua
-- Creates a LÖVE2D Audio object
-- “type” of “stream” or “static”
-- streamed assets will be streamed from disk
-- static assets will be preserved in memory
love.audio.newSource(path, [type])

sounds = {
    ['paddle_hit'] = love.audio.newSource('sounds/paddle_hit.wav', 'static'),
    ['score'] = love.audio.newSource('sounds/score.wav', 'static'),
    ['wall_hit'] = love.audio.newSource('sounds/wall_hit.wav', 'static')
}
```

The function `love.resize(width, height)`.

```lua
-- Called by LÖVE every time we resize the application
-- push:resize() needs to be called here
-- so that it can dynamically rescale its internal canvas to fit our new window dimensions
function love.resize(width, height) 
    push:resize(width, height)
end
```

---

## AABB Collision Detection 

AABB Collision Detection relies on all colliding entities to have “axis-aligned bounding boxes”. 
This simply means their collision boxes contain no rotation in our world space.

```lua
if rect1.x is not > rect2.x + rect2.width and 
    rect1.x + rect1.width is not < rect2.x and
    rect1.y is not > rect2.y + rect2.height and 
    rect1.y + rect1.height is not < rect2.y:
      collision is true
  else
      collision is false
```