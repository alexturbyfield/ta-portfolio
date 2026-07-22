// lib/projects.ts

export type ProjectSection = {
  heading: string
  body: string[]
  shaderShowcase?: boolean
  codeExample?: {
    title: string
    language: string
    code: string
  }
}

export type Project = {
  slug: string
  title: string
  description: string
  role?: string
  date?: string
  subtitle?: string
  responsibilities?: string
  tools?: string[]
  heroImage?: string
  heroImagePosition?: string
  heroBackgroundImage?: string
  images?: string[]
  imageCaptions?: Record<string, string>
  carouselVariant?: 'default' | 'onion'
  videos?: string[]
  sections?: ProjectSection[]
  heroBackgroundBlur?: boolean
  heroImageContain?: boolean
  heroImageOnly?: boolean
}

export const projects: Project[] = [
  {
    slug: 'pogo-encounters',
    title: 'Building a Scalable, Data-Driven Biome System',
    subtitle: 'Pokémon GO • Feature Technical Lead',
    description:
      'How do you make millions of encounter locations feel local, seasonal, and alive without hand-authoring the world? I led technical development for a biome system that translated map context, ecosystem data, artist-authored rules, and live service configuration into performant mobile encounter environments.',
    role: 'Feature Technical Lead',
    date: 'Spring 2024',
    tools: ['Unity', 'C#', 'HLSL', 'Scriptable Objects', 'GPU Instancing', 'Python'],
    heroImage: '/images/projects/biomes/biomes-pump.png',
    images: [
      '/images/projects/biomes/biomes-pump.png',
      '/images/projects/biomes/biomes-day.png',
      '/images/projects/biomes/biomes-evening.png',
      '/images/projects/biomes/biomes-grasslands.png',
      '/images/projects/biomes/biomes-cand.png',
      '/images/projects/biomes/biomes-pika.png',
      '/images/projects/biomes/biomes_bulb.png',
      '/images/projects/biomes/biomes_squirt.png',
      '/images/projects/biomes/biomes_wigg.png',
      '/images/projects/biomes/screen_3840x2160_2024-04-04_10-37-33.png',
      '/images/projects/biomes/screen_3840x2160_2024-04-04_10-37-38.png',
      '/images/projects/biomes/screen_3840x2160_2024-04-04_15-35-19.png',
    ],
    carouselVariant: 'onion',
    sections: [
      {
        heading: 'Procedural Placement',
        body: [
          'Encounter scenes are generated from street, terrain, and ecosystem data instead of hand-authored layouts.',
          'Placement is seeded to location so a place can feel persistent rather than random each time you return.',
          'Variation happens inside authored rules, which keeps the system expressive without sacrificing readability.',
        ],
      },
      {
        heading: 'Data-Driven Authoring',
        body: [
          'I designed a Scriptable Object pipeline that maps biome rules directly to spawn behavior and environment configuration.',
          'That let the team author new biome variants, tune balance, and support live updates without needing engineering for every change.',
          'The result was a maintainable worldbuilding system that scaled better than one-off scene work.',
        ],
      },
      {
        heading: 'Season, Weather, and Events',
        body: [
          'The same biome can shift across season, weather, and event states, from cherry blossoms to winter dressing to Halloween mood changes.',
          'Lighting, fog, and shadow treatments help those changes read immediately without turning the world noisy.',
          'This let live service content feel integrated into the system instead of bolted on top of it.',
        ],
      },
      {
        heading: 'Rendering and Performance',
        body: [
          'I pushed GPU instancing across environment assets, iterated on shader cost, and worked with artists on poly and material budgets.',
          'We profiled on lower-end devices, moved nonessential work out of runtime, and cached data wherever it was safe to do so.',
          'The goal was quick encounter load time, stable frame cost, and a feature that could survive real production constraints.',
        ],
      },
      {
        heading: 'Artist Workflow',
        body: [
          'I built tooling that let artists preview, generate, and tune environments instead of fighting raw world data.',
          'Rules and overrides gave the team control over composition, special cases, and the tone of each biome family.',
          'That balance between authorship and automation is what made the feature feel crafted at global scale.',
        ],
      },
    ],
  },
  {
    slug: 'pogo-urp',
    title: 'Pokémon GO Universal Render Pipeline Conversion',
    subtitle: 'Senior Technical Artist, Graphics Migration',
    description:
      "I helped lead Pokémon GO's migration from Unity's Built-In Render Pipeline to Universal Render Pipeline, converting core rendering systems, rewriting shader architecture, and adapting graphics features across the client.",
    role: 'Senior Technical Artist',
    date: 'Summer 2024-Spring 2025',
    tools: [
      'Unity',
      'URP',
      'C#',
      'HLSL',
      'Shader Graph',
      'Custom Renderer Features',
    ],
    heroImage: '/images/projects/urp-header.jpg',
    sections: [
      {
        heading: 'Project Goal',
        body: [
          "This project centered on moving Pokémon GO from Unity's Built-In Render Pipeline to Universal Render Pipeline without losing the visual character or feature coverage the game depended on.",
          'The challenge was not just technical compatibility. We needed to understand every shader path, every rendering dependency, and every graphical effect that players relied on across a very large live game.',
        ],
      },
      {
        heading: 'Foundation & Planning',
        body: [
          'Before conversion work began, we documented every shader, property, and use case across the game. That gave us a complete picture of what existed, what was shared, what was one-off, and where the biggest migration risks lived.',
          'We also collaborated with other teams that had already completed similar render pipeline conversions, using their guidance to shape our approach and avoid common mistakes early.',
          'From there, we built a shared library of shader functions that could be reused across the project. That gave us a more maintainable foundation and helped keep behavior consistent as more systems moved over.',
        ],
      },
      {
        heading: 'Shader Conversion',
        body: [
          'A major part of my role was converting all Pokémon shaders and a majority of the client shaders to work in URP.',
          'That meant more than syntax changes. Many shaders needed to be rethought in terms of lighting models, render paths, shared functionality, and how they fit into a new rendering architecture while still matching the look players expected.',
          'The shared function library became especially important here, since it let us reduce duplication, standardize behavior, and make future shader work easier to maintain.',
        ],
      },
      {
        heading: 'Renderer Features & Graphics Systems',
        body: [
          "I also rewrote several graphical effects to use Unity's Custom Renderer Features, covering both AR and non-AR rendering paths.",
          'These included real-time shadow solutions, screen blur implementations, and transparent warping effects that could no longer rely on their previous pipeline behavior.',
          'That work required balancing visual fidelity, maintainability, and performance while making sure these systems still behaved correctly across the wide range of contexts Pokémon GO supports.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'The conversion was a large-scale graphics effort that touched core rendering infrastructure as well as day-to-day content production.',
          'By combining documentation, shared shader architecture, and targeted rewrites of higher-risk effects, we were able to move the project toward URP in a way that was more systematic, scalable, and sustainable for the team.',
        ],
      },
    ],
  },
  {
    slug: 'pogo-whats-your-favorite-ar',
    title: "Pokémon GO What's Your Favorite?",
    subtitle: 'Technical Artist, AR Composition Systems',
    description:
      `I helped shape the composition systems behind Pokémon GO's "What's Your Favorite?" AR feature, building rules and behaviors that made photo moments feel more intentional, expressive, and flattering across a huge range of Pokémon.`,
    role: 'Technical Artist',
    date: '2025-2026',
    tools: [
      'Unity',
      'C#',
      'AR',
      'Scriptable Objects',
      'Runtime Tools',
      'Composition Logic',
    ],
    heroImage: '/images/projects/whats-your-favorite.webp',
    sections: [
      {
        heading: 'Project Goal',
        body: [
          `What's Your Favorite? was designed as a broadly accessible AR camera feature in Pokémon GO, letting players take photos with almost any Pokémon, even if they had not caught it yet.`,
          'The feature needed to feel playful and easy to use, but the real challenge was underneath that simplicity. If players were going to create photos with a huge variety of Pokémon and human subjects, the system needed to help those compositions land well by default.',
        ],
      },
      {
        heading: 'Role & Collaboration',
        body: [
          'As a Technical Artist, I worked closely with the primary engineer shaping the AR architecture, focusing on how to make the compositions feel stronger through systemic behavior rather than one-off tuning.',
          'Using both engineering tools and tools of my own, I helped define rule sets for how Pokémon should be placed in relation to the subject, the camera, and the overall framing of the photo.',
          'That collaboration was important because the feature was not about hand-authoring individual moments. It was about building a flexible system that could make a very wide content set feel intentional and photo-friendly.',
        ],
      },
      {
        heading: 'Placement & Behavior Systems',
        body: [
          'A large part of the work centered on defining systemic rules for placement. Different Pokémon types needed different handling, especially when dealing with scale, posture, and how they should share the frame with a person.',
          `I wrote logic for flying Pokémon so their faces would generally line up with the subject's face, helping the result feel more like a shared portrait instead of two disconnected elements in the same shot.`,
          'I also created behavior logic to rotate Pokémon heads so they could look toward either the person or the camera, depending on what produced the strongest and most natural-looking composition.',
        ],
      },
      {
        heading: 'Authoring & Overrides',
        body: [
          'To make the system practical to tune, I created a Scriptable Object structure that contained rules as well as overrides for individual Pokémon types.',
          'That let us keep the broader composition behavior systemic while still giving the team a clean way to account for species-specific exceptions, unusual silhouettes, or pose needs that did not fit the default rules.',
          'The result was a workflow that balanced consistency with flexibility, which is exactly what a content-heavy live feature like this needs in production.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          `What's Your Favorite? needed to feel simple for players, even though a lot of composition logic was happening behind the scenes.`,
          'The work was about helping the feature produce photos that felt more flattering, more intentional, and easier to share across a wide range of Pokémon without asking the player to fight the system.',
        ],
      },
    ],
  },
  {
    slug: 'pokemon-worlds-2025-battle-arena',
    title: 'Pokémon World Championships 2025 Battle Arena',
    subtitle: 'Technical Artist, Event Battle Environment',
    description:
      'I helped build a special Pokémon GO battle arena for the 2025 World Championships, shaping the screen content, VFX, crowd energy, and animation language so the space felt grand, competitive, and unmistakably built for a world-stage event.',
    role: 'Technical Artist',
    date: '2025',
    tools: ['Unity', 'C#', 'HLSL', 'Shaders', 'VFX', 'Mobile Optimization'],
    heroImage: '/images/projects/pokemon-worlds-arena-stage.avif',
    videos: ['https://www.youtube.com/embed/R8BrKGTaVJs?start=20'],
    sections: [
      {
        heading: 'What I Focused On',
        body: [
          'Dynamic shaders for the video wall, crowd, and barrier systems.',
          'Metallic and electric surface treatments to sharpen the arena mood.',
          'State-driven barrier and lighting changes tied to battle flow.',
          'Video wall camera animation, plus technical support and logic for the 3D artist.',
        ],
      },
      {
        heading: 'Interactive Barrier Study',
        body: [
          'This interactive shader section shows the kind of barrier behavior the arena used to communicate energy and state changes.',
        ],
        shaderShowcase: true,
        codeExample: {
          title: 'Live SDF Honeycomb Shader Playground',
          language: 'GLSL',
          code: `// Snap a cube-coordinate position to the nearest valid hex cell.
// Cube coordinates are handy for hex grids because x + y + z = 0.
vec3 cubeRound(vec3 cube) {
  vec3 rounded = floor(cube + 0.5);
  vec3 diff = abs(rounded - cube);

  // Repair the axis with the largest rounding error
  // so the cube-coordinate constraint still holds.
  if (diff.x > diff.y && diff.x > diff.z) {
    rounded.x = -rounded.y - rounded.z;
  } else if (diff.y > diff.z) {
    rounded.y = -rounded.x - rounded.z;
  } else {
    rounded.z = -rounded.x - rounded.y;
  }

  return rounded;
}

// Gold noise uses the golden ratio to generate pseudo-random variation.
// It tends to give a more consistent result across different hardware types,
// which makes it a nice fit for subtle per-cell color variation.
float gold_noise(vec2 uv, float seed) {
  float phi = 1.61803398874989484820459;
  return fract(tan(distance(uv * phi, uv) * seed) * uv.x);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  const float sqrt3 = 1.7320508;

  // Border and cell palette.
  vec3 borderPurple = vec3(0.176, 0.04, 1.0);
  vec3 cyanA = vec3(0.14, 0.9, 0.96);
  vec3 cyanB = vec3(0.44, 0.98, 1.0);

  // Center the UV space and normalize it so the pattern does not stretch
  // with aspect ratio changes.
  vec2 p = (fragCoord - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Slider-driven scale controls how large or dense the honeycomb appears.
  p *= u_patternScale;

  // Base hex radius in this local coordinate space.
  float hexSize = 0.42;

  // Convert from 2D screen space into pointy-top axial hex coordinates.
  vec2 axial = vec2(
    (sqrt3 / 3.0 * p.x - 1.0 / 3.0 * p.y) / hexSize,
    (2.0 / 3.0 * p.y) / hexSize
  );

  // Promote axial coordinates to cube coordinates,
  // then snap to the nearest hex cell.
  vec3 cube = vec3(axial.x, -axial.x - axial.y, axial.y);
  vec3 rounded = cubeRound(cube);

  // Convert the snapped hex coordinate back to a 2D center point.
  vec2 center = hexSize * vec2(
    sqrt3 * (rounded.x + 0.5 * rounded.z),
    1.5 * rounded.z
  );

  // Measure the pixel inside the chosen cell.
  vec2 local = p - center;
  vec2 q = abs(local);

  // Signed-distance-style hex shape for a pointy-top hexagon.
  float baseHex = max(q.y * 0.8660254 + q.x * 0.5, q.x);

  // Anti-alias width scales with pattern density.
  float aa = 1.4 * u_patternScale / min(u_resolution.x, u_resolution.y);

  // Create a left-to-right pulse by shifting the phase using each cell center.
  float pulse = 0.5 + 0.5 * sin(center.x * u_horizontalPhase - u_time * 1.6);

  // The purple inner hex shrinks and expands, but never fully fills the border.
  float maxRadius = hexSize * 0.76;
  float minRadius = maxRadius - hexSize * u_shrinkAmount;
  float innerRadius = mix(minRadius, maxRadius, pulse);
  float innerHex = baseHex - innerRadius;

  // Convert the signed distance into a soft mask for the inner cyan hex.
  float cellInterior = 1.0 - smoothstep(-aa, aa, innerHex);

  // Use gold noise on the snapped cell id so each hex gets a stable,
  // slightly different cyan tint.
  float cellNoise = gold_noise(vec2(rounded.x, rounded.z), 4.7);
  vec3 hexColor = mix(cyanA, cyanB, cellNoise);

  // Blend between the purple border and cyan cell interior.
  vec3 color = mix(borderPurple, hexColor, cellInterior);

  fragColor = vec4(color, 1.0);
}`,
        },
      },
      {
        heading: 'Outcome',
        body: [
          'The final arena gave Pokémon GO a battle space that felt more theatrical, more competitive, and more event-specific without losing clarity.',
          'For me, it was a good example of using technical art systems to make presentation, atmosphere, and gameplay support each other at the same time.',
        ],
      },
    ],
  },
  {
    slug: 'systems-virtual-vet',
    title: 'SYSTEMS-Virtual Vet',
    subtitle: 'Technical Lead, Educational Game Development',
    description:
      'I led technical development for an award-winning educational game that taught elementary and middle school students body systems through interactive veterinary cases, combining framework engineering, art production, and gameplay-focused learning design.',
    role: 'Lead Unity Developer',
    date: 'Fall 2014-Summer 2019',
    tools: [
      'Unity',
      'C#',
      'HLSL',
      'Autodesk Maya',
      'Adobe Photoshop',
      'Adobe After Effects',
      'Python',
    ],
    heroImage: '/images/art/SYSTEMS_WEB.png',
    heroImagePosition: 'center 24%',
    sections: [
      {
        heading: 'Project Goal',
        body: [
          'SYSTEMS: Virtual Vet was designed to help students learn science by stepping into the role of veterinary assistants, diagnosing and treating virtual animal patients while working through core body systems.',
          'The experience was built around applied learning. Instead of only presenting facts, the game asked students to analyze symptoms, interpret information, and connect concepts across systems such as musculoskeletal, cardiovascular, gastrointestinal, and endocrine.',
        ],
      },
      {
        heading: 'Role & Scope',
        body: [
          'As Technical Lead, I oversaw a small team while contributing across both engineering and art production.',
          'I provided much of the project framework in code, helped guide the use of pipeline tools, and built a large portion of the implementation that supported the game itself.',
          'Alongside development, I created 3D and 2D art assets, concept art, and animation, working across Unity, Autodesk Maya, Adobe tools, and related content workflows to keep the project cohesive from prototype through production.',
        ],
      },
      {
        heading: 'Building the Experience',
        body: [
          'The project needed to function as both a game and a teaching tool, which meant the software had to support clarity, pacing, and accessibility while still feeling engaging to students.',
          'A large part of the work was building systems flexible enough to support multiple interactive learning scenarios while keeping the player experience readable and approachable.',
          'That blend of framework engineering and content creation was central to the project. The underlying tools and implementation had to stay dependable, but the final experience also needed warmth, character, and a strong visual identity that made the material inviting.',
        ],
      },
      {
        heading: 'Collaboration & Recognition',
        body: [
          'Virtual Vet was developed in collaboration with researchers and educators at the University of Georgia and was shaped around real learning goals as well as player engagement.',
          'The game was later recognized by the International Serious Play Awards, earning a Bronze Medal for supporting higher-level thinking in elementary students.',
          'That outcome reflected the larger goal of the project: building educational software that felt thoughtfully crafted rather than purely instructional.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'SYSTEMS: Virtual Vet gave students a more active way to learn science concepts while giving the team a production pipeline capable of supporting a visually rich, content-heavy interactive experience.',
          'For me, it was an early project that deeply shaped how I think about technical art leadership: strong tools, clear systems, and thoughtful presentation all matter more when the audience is learning through play.',
        ],
      },
    ],
  },
  {
    slug: 'bingo-unity',
    title: 'Bingo Showdown',
    subtitle: 'Technical Artist, Cross-Discipline Development',
    description:
      'I worked in a highly flexible technical art role on Bingo Showdown, moving between art, VFX, UI, optimization, and gameplay support while helping connect the needs of artists and engineers across the project.',
    role: 'Technical Artist',
    date: 'Fall 2019-Spring 2020',
    tools: ['Unity', 'C#', 'UGUI', 'Shaders', 'VFX', 'WebGL', 'Mobile'],
    heroImage: '/images/projects/bingo-hero.png',
    videos: ['/images/projects/bingo/level-up.mp4'],
    sections: [
      {
        heading: 'Project Goal',
        body: [
          'Bingo Showdown was a live production environment where the work often crossed traditional role boundaries. The needs of the game shifted constantly across content, UI, effects, optimization, and feature support.',
          'That made flexibility a core part of the job. Rather than sitting in one narrow lane, I moved where the team needed support and helped keep production moving across multiple areas of the game.',
        ],
      },
      {
        heading: 'Role & Collaboration',
        body: [
          'My role was highly collaborative and adaptive. I worked closely with the art team on VFX, helping implement and refine effects so they landed well visually while still fitting the technical realities of the project.',
          'At the same time, I partnered with engineers to help build systems and support feature development in ways that connected content needs with technical implementation.',
          'That mix of responsibilities made the role less about a single specialty and more about being a dependable bridge between disciplines.',
        ],
      },
      {
        heading: 'Technical Art Support',
        body: [
          'My work included shaders, VFX, UI support, asset optimization, and general problem solving across the client.',
          'I also contributed to gameplay and production-facing implementation in C#, helping where technical systems needed someone who could understand both the visual side and the engineering side of the work.',
          'In practice, that meant balancing polish with practicality and helping the team move from idea to shippable result without losing momentum.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Bingo Showdown was a strong example of the kind of role I enjoy most: one where technical art is not isolated from the rest of development, but actively supports collaboration across the team.',
          'The work required versatility, communication, and a willingness to shift focus quickly, whether the immediate need was visual polish, system support, or helping different disciplines line up around the same goal.',
        ],
      },
    ],
  },
  {
    slug: 'voiceball',
    title: 'Voiceball',
    subtitle: 'Art, Design, and Technical Art',
    description:
      'I contributed art, design, and technical implementation to Voiceball, an experimental voice-controlled party game where players use pitch and volume to move a ball, compete, perform, and usually make everyone nearby laugh.',
    role: 'Artist/Technical Artist',
    date: '2017-2018',
    tools: ['Unity', 'C#', 'UGUI', 'Audio Input', 'Game Design', 'Visual Design'],
    heroImage: '/images/main/VoiceballPromo.jpg',
    images: [
      '/images/projects/voiceball/alien-field.jpg',
      '/images/projects/voiceball/eyt-img.png',
      '/images/projects/voiceball/field-unity.png',
      '/images/projects/voiceball/pinball-field.png',
      '/images/projects/voiceball/pinball-field-real.png',
      '/images/projects/voiceball/record-field.png',
      '/images/projects/voiceball/star-field.png',
    ],
    videos: ['https://www.youtube.com/embed/mmgO5fPRpc4'],
    sections: [
      {
        heading: 'Project Goal',
        body: [
          'Voiceball started from a simple, strange, and very sticky idea: what if foosball was controlled by your voice?',
          'Players create waves from microphone input, using pitch and volume to hit a ball into the other player&apos;s goal. The result is part sports game, part performance, and part room-wide icebreaker.',
          'The goal was not to make players feel polished. It was to make them feel brave enough to be a little ridiculous, then discover that there was real skill hiding inside the silliness.',
        ],
      },
      {
        heading: 'Role & Collaboration',
        body: [
          'I contributed to Voiceball across art, design, and technical art, helping shape both how the game looked and how it communicated its unusual input system to players.',
          'Because the game depends on people immediately understanding that their voice affects the field, the visuals needed to make sound feel physical. The waveform representation had to be readable, responsive, and entertaining to watch.',
          'This was a small indie team, so the work was naturally collaborative. Design, implementation, presentation, and event feedback all fed into each other quickly.',
        ],
      },
      {
        heading: 'Designing Around Voice',
        body: [
          'One of the most interesting parts of Voiceball is that voice is personal. Players do not all have the same pitch range, volume, confidence, or comfort level.',
          'The game evolved around that reality, including systems that adapt to each player&apos;s vocal range and respond to quieter or louder players and environments.',
          'That made the design challenge more than input detection. The game needed to encourage expression without making players feel like the software was judging their voice.',
        ],
      },
      {
        heading: 'Iteration in Public',
        body: [
          'Voiceball was shown at events around Atlanta and the Southeast, including DreamHack, Indie Bits, MomoCon, SIEGE, Southern Fried Gaming Expo, and Terminus.',
          'Each showing gave us immediate feedback because the game is extremely observable. You can tell very quickly when players are confused, shy, competitive, delighted, or fully committed to yelling at a digital ball.',
          'That event feedback shaped how we refined the experience, especially around clarity, spectacle, and helping players understand the relationship between their voice and the game field.',
        ],
      },
      {
        heading: 'Recognition',
        body: [
          'Voiceball was selected for Alt.Ctrl.GDC in 2018 and won Best Game at the Georgia Tech Global Game Jam site in 2017.',
          'It was also recognized in my resume history through nominations and showcases including the ArtsATL Luminary Award for Arts Innovation, Alt.Ctrl.GDC, and the GGDA Best in Georgia competition.',
          'That recognition reflected what made the project special: it was playful, approachable, technically unusual, and very hard to ignore once people started playing.',
        ],
      },
      {
        heading: 'Outcome',
        body: [
          'Voiceball remains one of the clearest examples of how technical design can create a social moment. The tech was important, but the real success was getting players to perform, laugh, compete, and surprise themselves.',
          'For me, it reinforced how much I enjoy work where interaction, visual feedback, technical systems, and human behavior all crash into each other in the best possible way.',
        ],
      },
    ],
  },
  {
    slug: 'ultra-music-festival-red-bull-mind-meld',
    title: 'Ultra Music Festival 2012 Red Bull Mind Meld',
    subtitle: 'Animation, Projection Mapping',
    description:
      'I created animation content for a large-scale projection mapped installation on the InterContinental Hotel during Ultra Music Festival 2012, contributing visual modules for a massive public-facing Red Bull experience in downtown Miami.',
    role: '3D Animator / Technical Artist',
    date: '2012',
    tools: ['3D Animation', 'Projection Mapping', 'Motion Design', 'Large-Format Installation'],
    heroImage: '/images/projects/umf-example-hero-blurred.png',
    videos: ['https://www.youtube.com/embed/3GgLcBYWXww'],
    sections: [
      {
        heading: 'Project Overview',
        body: [
          "For Ultra Music Festival 2012, Red Bull commissioned Integrated Visions Productions to create a large-scale projection mapped installation across the north facade of Miami's InterContinental Hotel, directly adjacent to Bayfront Park.",
          'The final canvas covered roughly 20,000 square feet of the 366-foot-tall building, turning the hotel itself into a monumental animated surface visible to festival crowds and the surrounding city.',
        ],
      },
      {
        heading: 'My Contribution',
        body: [
          'My role on the project was creating animation content for the projection mapping experience.',
          'I provided animation modules for a public-facing installation that had to read clearly at architectural scale, hold up as part of a larger visual system, and contribute to the energy of the festival environment.',
        ],
      },
      {
        heading: 'Why It Mattered',
        body: [
          'This project was an early example of the kind of work I still enjoy: translating visual ideas into experiences that operate at a larger systems level, whether that means a live event, a real-time environment, or a space-aware installation.',
          'Even though the medium was projection mapping rather than a game engine feature, the same instincts were there: readability, scale, motion, composition, and making visuals work within a demanding technical setup.',
        ],
      },
    ],
  },
]
