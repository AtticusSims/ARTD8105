# Session 5 — Rule in 3D

**Wed 16 September 2026 · 10:00–13:00 · Room G1015**

---

## In class

**Your topic, and your recreation system** — presentations, about half the session.

**Blender and Cursor** — setting it up, and a live build. How a rule gets volume, and what changes when the thing you made has to survive being manufactured.

---

## Setup — do this before or during class

```
@projects/05_rule_in_3d/blender_agent.md
```

The agent walks you through installation step by step and stops at each one. It is the same pattern as the course repository setup: you are not expected to know any of this, and you are not expected to do it alone.

**Three things it will tell you that are worth knowing now:**

- **Blender 4.5 or 5.2 LTS**, from blender.org. No admin rights on your laptop? Download the portable `.zip` instead of the installer.
- **Preferences → System → Allow Online Access must be ON.** With it off, the connection fails silently — the add-on says it is running and never opens its port. This is the single most common way the setup appears broken when it is not.
- **Install the official Blender MCP server**, not the better-known community one. They use the same port and will fight. The official one is written by Blender's own developers.

---

## Assignment — a 3D printable object

**Due session 6, Wednesday 23 September.** Bring the object ready to show. **You do not have to have printed it** — the file is the deliverable, and the fabrication checkpoint is the same day.

Make something whose form comes from a rule. Not modelled by hand, and not a described scene — a system that generates geometry, with parameters you can move.

**It has to be genuinely printable, and that is the hard part.** Watertight is not the same as printable:

- [ ] **Manifold** — no holes, no non-manifold edges
- [ ] **One shell** — a single connected piece. Procedural trimming leaves small islands, and the slicer drops them without telling you
- [ ] **Normals outward** — check the *sign* of the volume. An inside-out model looks perfect on screen
- [ ] **Walls thick enough to exist** — measure it. Under about 1 mm, most printers will not make it
- [ ] **Real scale** — millimetres, 1 unit = 1 mm

**Verify it twice, the second time outside Blender.** A few lines of Python that open your exported STL and check it from scratch — triangle count, bounding box, signed volume. Blender will always tell you its own mesh is fine; the second check tests the bytes the slicer reads.

### Where it goes

```
my_work/object_3d/
├── <your scene>.blend
├── <your object>.stl        and .3mf if you have it
├── the script or node graph that generates it
└── README.md                what the rule is, what the parameters do, the numbers from your checks
```

---

## Optional — pick one if you want more

Neither is required. Both are good if the object went quickly.

- [ ] **A 3D motion graphic.** Animate the parameters, not the object. A generative system in motion is usually just its own parameter space, toured. If you want it to loop seamlessly, every periodic term has to complete a whole number of cycles.
- [ ] **A lit and textured scene.** Take the object you made and make it worth looking at — lighting, materials, a procedural texture that follows the geometry rather than being painted on it. A grey mesh under a default lamp is not a finished piece of work.

---

## Also this week

- [ ] **One reading note** — a paper of your own choosing.

---

## One thing to expect

**Almost nothing here fails loudly.** A camera at the origin, a light on the wrong parameter, a model that is inside out, a wall too thin to print — the software accepts all of it and reports success.

So do not check whether it errored. **Measure something, or look at a picture.** That habit is the actual subject of this week, and it transfers to everything else you will direct an agent to do.
