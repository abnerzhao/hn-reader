---
title: The 2D physics prototype behind GTA’s vehicles
date: 2026-10-11
source_name: patkerr.co.uk
source_url: https://patkerr.co.uk/2d-vehicles/
---

## easy

In 1996 a simple 2D test ran on an Atari ST. It showed how a vehicle could move and turn. Later the same idea appeared in Grand Theft Auto.

A JavaScript version was made for the 30‑year anniversary. You can choose Car, Ship or Brick mode. Keys or touch let you steer, brake and flip gravity. Barriers at the edge keep the shape inside the play area.

The core treats the vehicle as a solid block that can spin. Forces at the centre push straight; off‑centre forces also turn it. Walls feel drag that slows roll and a strong drag sideways. Steering changes wheel direction; handbrake reduces rear grip. The simulation steps forward small amounts and draws the result.

## medium

One weekend in late August 1996, a programmer created a 2D physics simulation that would become the foundation for the vehicle system in Grand Theft Auto. Written in GFA BASIC on an Atari ST home computer, the initial version was a simple wireframe demonstration. Years later, the same logic was reimagined in JavaScript to celebrate the project's thirty-year milestone, offering players a remastered experience of the original mechanics. The recreation allows users to switch between three distinct modes—Car, Ship, and Brick—each responding differently to forces and controls.

At the heart of the system lies a classical 2D rigid body dynamics simulation, a sophisticated approach that was uncommon in gaming at the time. Earlier titles relied on simplistic point physics, treating rotation with ad‑hoc tricks. By implementing proper rigid‑body physics, including torques, the simulation handled rotation in a coherent manner. To enhance realism further, the creator introduced a novel vehicle simulation layer based on an approximate model of tire behavior. Though scientifically inaccurate, this model proved sufficient for creating believable vehicle movement during development.

The vehicle coordinator manages the interaction between shape, behavior, and physical state. Each mode applies specific forces: the Car receives engine force and steering with resistance distributed across four tire positions, the Ship generates thrust at an attachment point, and the Brick relies on direct pointer drag. Switching modes swaps the visual shell and behavioral rules while keeping the underlying body intact. The rigid body itself tracks position, velocity, orientation, and angular velocity, allowing forces applied off‑center to both accelerate and rotate the vehicle.

Collisions are resolved using a straightforward method that treats barriers as frictionless edges. When a vehicle approaches a boundary, the simulation pushes it back inside and calculates a contact impulse if the movement was inward. Sideways impacts can alter both speed and spin, producing the characteristic handling felt in the original concept. This combination of precise physics and simplified tire modeling established a lasting legacy in game development, demonstrating how clever approximations can deliver engaging gameplay.

## hard

.

.

.

.

.

.

.
