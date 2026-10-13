/**
 * JS Cosmic Learning Hub - Script
 */

// --- CONTENT DATA ---
const JS_CONTENT = {
    "S01": {
        title: "Basics, Variables, I/O",
        concepts: [
            {
                name: "Variables",
                questions: [
                    { q: "What is JavaScript?", a: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is primarily used to create interactive and dynamic content on websites." },
                    { q: "What is a variable?", a: "A variable is a named container used to store data values that can be referenced and manipulated in a program." },
                    { q: "Differentiate let and const.", a: " 'let' allows you to declare variables that can be reassigned later. 'const' is used for variables that should remain constant after their initial assignment." },
                    { q: "What does prompt() return?", a: "It returns a string containing the text entered by the user, or null if the user clicks 'Cancel'." },
                    { q: "Why use Number() with prompt()?", a: "Since prompt() always returns a string, Number() is used to convert that string into a numerical value for mathematical operations." },
                    { q: "P1: Display a welcome message", a: "console.log('Welcome to JavaScript');" },
                    { q: "P2: Store and display student details", a: "let name = 'John';\nlet age = 20;\nconsole.log(`Student: ${name}, Age: ${age}`);" },
                    { q: "P3: Convert user input to a number", a: "let input = prompt('Enter a number:');\nlet num = Number(input);\nconsole.log('Result: ' + (num + 10));" }
                ]
            },
            {
                name: "Input and Output",
                questions: [
                    { q: "How to output to the console?", a: "Use console.log()." },
                    { q: "How to display an alert box?", a: "Use alert('Message')." }
                ]
            }
        ]
    },
    "S02": {
        title: "Operators and Expressions",
        concepts: [
            {
                name: "Arithmetic & Logical",
                questions: [
                    { q: "What is an operator?", a: "A symbol that tells the compiler to perform a specific mathematical or logical manipulation." },
                    { q: "What does % do?", a: "The modulo operator returns the remainder of a division operation." },
                    { q: "Difference between = and ===", a: "= is assignment. === is strict equality, checking both value and type." },
                    { q: "What does && mean?", a: "Logical AND: returns true if both operands are true." },
                    { q: "What does || mean?", a: "Logical OR: returns true if at least one operand is true." },
                    { q: "P1: Even or Odd", a: "let n = 10;\nconsole.log(n % 2 === 0 ? 'Even' : 'Odd');" },
                    { q: "P2: Divisible by 3 and 5", a: "let n = 15;\nconsole.log(n % 3 === 0 && n % 5 === 0 ? 'Yes' : 'No');" },
                    { q: "P3: Divisible by 5 or 10", a: "let n = 10;\nconsole.log(n % 5 === 0 || n % 10 === 0 ? 'Yes' : 'No');" }
                ]
            }
        ]
    },
    "S03": {
        title: "Conditional Statements",
        concepts: [
            {
                name: "If/Else & Ternary",
                questions: [
                    { q: "What is a condition?", a: "A boolean expression that evaluates to either true or false." },
                    { q: "When is if...else used?", a: "When you want to execute one block of code if a condition is true and another if it's false." },
                    { q: "Why use else if?", a: "To check multiple mutually exclusive conditions in sequence." },
                    { q: "What is a nested condition?", a: "An if statement placed inside another if statement." },
                    { q: "What is the ternary operator?", a: "A shorthand for if...else: condition ? exprIfTrue : exprIfFalse." },
                    { q: "P1: Positive or Negative", a: "let n = 5;\nconsole.log(n >= 0 ? 'Positive' : 'Negative');" },
                    { q: "P2: Positive, Negative, or Zero", a: "let n = 0;\nif(n > 0) console.log('Positive');\nelse if(n < 0) console.log('Negative');\nelse console.log('Zero');" },
                    { q: "P3: Voting Eligibility", a: "let age = 18;\nconsole.log(age >= 18 ? 'Eligible' : 'Not Eligible');" },
                    { q: "P4: Greater of Two Numbers", a: "let a=10, b=20;\nconsole.log(a > b ? a : b);" },
                    { q: "P5: Largest of Three Numbers", a: "let a=10, b=20, c=15;\nlet max = Math.max(a, b, c);\nconsole.log(max);" },
                    { q: "P6: Grade from Marks", a: "let m = 85;\nif(m >= 90) console.log('A');\nelse if(m >= 75) console.log('B');\nelse if(m >= 50) console.log('C');\nelse console.log('Fail');" },
                    { q: "P7: Child, Teenager, Adult", a: "let age = 15;\nif(age <= 12) console.log('Child');\nelse if(age <= 19) console.log('Teenager');\nelse console.log('Adult');" }
                ]
            }
        ]
    },
    "S04": {
        title: "Loops: For, While, Do-While",
        concepts: [
            {
                name: "Looping Logic",
                questions: [
                    { q: "What is a loop?", a: "A sequence of instructions that is repeated until a certain condition is reached." },
                    { q: "When is a for loop useful?", a: "When you know exactly how many times the loop should run." },
                    { q: "While vs Do...While", a: "While checks the condition first. Do...While executes the block once before checking the condition." },
                    { q: "What is an infinite loop?", a: "A loop that never meets its exit condition and runs forever, potentially crashing the program." },
                    { q: "Why update loop counter?", a: "To eventually make the loop condition false and prevent infinite loops." },
                    { q: "P1: Print 1 to 10", a: "for(let i=1; i<=10; i++) console.log(i);" },
                    { q: "P2: Print 10 to 1", a: "let i=10; while(i>=1) { console.log(i); i--; }" },
                    { q: "P3: Repeat Message", a: "let i=0; do { console.log('Hello Everyone'); i++; } while(i<10);" },
                    { q: "P4: Even 1 to 50", a: "for(let i=2; i<=50; i+=2) console.log(i);" },
                    { q: "P5: Odd 1 to 50", a: "let i=1; while(i<=50) { console.log(i); i+=2; }" },
                    { q: "P6: Table of 5", a: "for(let i=1; i<=10; i++) console.log(`5 x ${i} = ${5*i}`);" },
                    { q: "P8: Sum 1 to 100", a: "let sum=0; for(let i=1; i<=100; i++) sum+=i; console.log(sum);" }
                ]
            }
        ]
    },
    "S05": {
        title: "Arrays and Methods",
        concepts: [
            {
                name: "Array Fundamentals",
                questions: [
                    { q: "What is an array?", a: "A single variable used to store multiple values of the same or different types in an ordered list." },
                    { q: "First index of an array?", a: "Index 0." },
                    { q: "What does push() do?", a: "Adds one or more elements to the end of an array." },
                    { q: "pop() vs shift()", a: "pop() removes the last element. shift() removes the first element." },
                    { q: "What does join('*') do?", a: "Concatenates all elements of an array into a string, separated by the specified character (*)." },
                    { q: "P1: Student Names Array", a: "let students = ['A', 'B', 'C', 'D', 'E'];\nconsole.log(students, students[0], students[students.length-1]);" },
                    { q: "P2: Add Fruits", a: "let fruits = ['Apple', 'Banana'];\nfruits.push('Mango', 'Orange');\nconsole.log(fruits);" },
                    { q: "P3: Remove Last Number", a: "let nums = [1,2,3,4,5];\nlet removed = nums.pop();\nconsole.log(removed, nums);" }
                ]
            }
        ]
    },
    "S06": {
        title: "Objects and Nested Data",
        concepts: [
            {
                name: "Object Basics",
                questions: [
                    { q: "What is an object?", a: "A collection of related data in the form of key-value pairs." },
                    { q: "How to read a property?", a: "Using dot notation (obj.property) or bracket notation (obj['property'])." },
                    { q: "What is a nested object?", a: "An object that contains another object as a property." },
                    { q: "What is an array of objects?", a: "A list where each element is an object, useful for representing structured data like a user list." },
                    { q: "P1: Student Object", a: "let student = { name: 'John', age: 20, city: 'NYC', course: 'JS' };\nconsole.log(student.name, student.age, student.city, student.course);" }
                ]
            }
        ]
    },
    "S07": {
        title: "Looping Through Data",
        concepts: [
            {
                name: "Data Iteration",
                questions: [
                    { q: "Loop through array using for?", a: "for(let i=0; i < arr.length; i++) { console.log(arr[i]); }" },
                    { q: "Get characters in string?", a: "for(let i=0; i < str.length; i++) { console.log(str[i]); }" },
                    { q: "Object.keys(obj) returns?", a: "An array containing all the keys of the object." },
                    { q: "What is an accumulator?", a: "A variable used to collect or sum up values during a loop (e.g., let total = 0;)." },
                    { q: "P3: Calculate Total", a: "let nums = [10, 20, 30]; let total=0; for(let n of nums) total+=n; console.log(total);" }
                ]
            }
        ]
    },
    "S08": {
        title: "Switch & Functions",
        concepts: [
            {
                name: "Control Flow & Functions",
                questions: [
                    { q: "Why use switch?", a: "It is a cleaner alternative to multiple else-if statements when comparing one variable against many constant values." },
                    { q: "What does break do in switch?", a: "It prevents the code from 'falling through' to the next case." },
                    { q: "What does return do?", a: "Exits a function and optionally sends a value back to the caller." },
                    { q: "What is a function parameter?", a: "A variable in a function definition that acts as a placeholder for the values passed during the function call." },
                    { q: "P4: Multiply Function", a: "function multiply(a, b) { return a * b; }\nconsole.log(multiply(5, 4));" }
                ]
            }
        ]
    },
    "S09": {
        title: "DOM Basics",
        concepts: [
            {
                name: "DOM Interaction",
                questions: [
                    { q: "What is the DOM?", a: "Document Object Model - a programming interface for web documents, representing the page as a tree of objects." },
                    { q: "What does querySelector() do?", a: "Returns the first element that matches a specified CSS selector." },
                    { q: "What does addEventListener() do?", a: "Attaches an event handler to an element without overwriting existing handlers." },
                    { q: "What is textContent?", a: "A property used to get or set the text inside an element, ignoring HTML tags." },
                    { q: "P1: Change text on click", a: "btn.onclick = () => { p.textContent = 'Welcome!'; };" }
                ]
            }
        ]
    },
    "S10": {
        title: "DOM Navigation & Modals",
        concepts: [
            {
                name: "Advanced DOM",
                questions: [
                    { q: "What is parentElement?", a: "A property that returns the parent node of the specified element." },
                    { q: "What does children return?", a: "A live HTMLCollection of an element's child elements." },
                    { q: "How to hide an element?", a: "By setting style.display = 'none' or style.visibility = 'hidden'." },
                    { q: "What is a modal?", a: "A dialog box/pop-up window that appears on top of the main page content, often dimming the background." },
                    { q: "P2: Open/Close Modal", a: "openBtn.onclick = () => modal.style.display = 'block';\ncloseBtn.onclick = () => modal.style.display = 'none';" }
                ]
            }
        ]
    },
    "S11": {
        title: "Timers",
        concepts: [
            {
                name: "Async Timers",
                questions: [
                    { q: "What does setTimeout() do?", a: "Executes a function once after a specified delay in milliseconds." },
                    { q: "What does setInterval() do?", a: "Repeatedly executes a function at specified intervals." },
                    { q: "Why store timer ID?", a: "To be able to cancel the timer using clearTimeout() or clearInterval()." },
                    { q: "Timer delay unit?", a: "Milliseconds (1000ms = 1s)." },
                    { q: "P6: Countdown Timer", a: "let count=10; let timer = setInterval(() => {\n  console.log(count--);\n  if(count < 0) clearInterval(timer);\n}, 1000);" }
                ]
            }
        ]
    },
    "S12": {
        title: "Dynamic HTML",
        concepts: [
            {
                name: "Generating Elements",
                questions: [
                    { q: "What does createElement() do?", a: "Creates a new HTML element node in memory." },
                    { q: "What does appendChild() do?", a: "Adds a node as the last child of a specified parent node." },
                    { q: "Why use textContent for text?", a: "It is safer than innerHTML because it doesn't parse the string as HTML, preventing XSS attacks." },
                    { q: "What is a dynamic table?", a: "A table whose rows and cells are generated programmatically using JS based on data." },
                    { q: "P1: Create Table Row", a: "let tr = document.createElement('tr');\nlet td = document.createElement('td');\ntd.textContent = 'Rahul';\ntr.appendChild(td);\ntable.appendChild(tr);" }
                ]
            }
        ]
    },
    "S13": {
        title: "Form Validation",
        concepts: [
            {
                name: "Inputs & Validation",
                questions: [
                    { q: "What is form validation?", a: "The process of ensuring user input is correct and complete before it's processed." },
                    { q: "What does preventDefault() do?", a: "Stops the default action of an event (e.g., preventing a form from refreshing the page on submit)." },
                    { q: "Why trim username?", a: "To remove accidental leading or trailing spaces that shouldn't be part of the identifier." },
                    { q: "Compare password and confirm password?", a: "To ensure the user didn't make a typo while setting their password." },
                    { q: "P1: Required fields check", a: "if(input.value.trim() === '') alert('Required!'); else alert('Accepted!');" }
                ]
            }
        ]
    },
    "S14": {
        title: "Updating DOM",
        concepts: [
            {
                name: "Element Management",
                questions: [
                    { q: "What does element.remove() do?", a: "Removes the element directly from the DOM." },
                    { q: "What does removeChild() require?", a: "The parent element and the specific child node to be removed." },
                    { q: "What is innerHTML?", a: "A property that allows you to get or set the HTML markup contained within an element." },
                    { q: "Why be careful with innerHTML?", a: "It can be a security risk (XSS) and is less performant than using createElement/appendChild for complex changes." },
                    { q: "P2: Add task to list", a: "let li = document.createElement('li');\nli.textContent = input.value;\nlist.appendChild(li); input.value = '';" }
                ]
            }
        ]
    },
    "S15": {
        title: "Carousel Logic",
        concepts: [
            {
                name: "Sliding Content",
                questions: [
                    { q: "What is a carousel?", a: "A UI component that allows users to cycle through a set of items (usually images) one by one." },
                    { q: "Why use overflow: hidden?", a: "To hide the images that are not currently in the viewport." },
                    { q: "What does translateX() do?", a: "Moves an element along the X-axis." },
                    { q: "Why multiply index by 100%?", a: "To shift the container exactly by one full width of an image per index." },
                    { q: "P1: Basic Carousel Logic", a: "let index=0;\nnextBtn.onclick = () => {\n  if(index < max) index++;\n  container.style.transform = `translateX(-${index * 100}%)`;\n};" }
                ]
            }
        ]
    },
    "S16": {
        title: "Revision",
        concepts: [
            {
                name: "Integrated Practice",
                questions: [
                    { q: "Why break large tasks into small steps?", a: "It makes the problem easier to solve, test, and debug." },
                    { q: "What is debugging?", a: "The process of finding and fixing errors (bugs) in a program." },
                    { q: "What is an edge case?", a: "A problem or situation that occurs only at an extreme (maximum or minimum) operating parameter." },
                    { q: "Why test both valid and invalid input?", a: "To ensure the program handles errors gracefully and doesn't crash when given unexpected data." },
                    { q: "What is code reuse?", a: "The practice of using existing code for new functionality, usually through functions or modules." },
                    { q: "P2: Total prices in array", a: "let prices = [100, 250, 50]; let total=0; for(let p of prices) total+=p; console.log(total);" }
                ]
            }
        ]
    }
};

// --- THREE.JS ENGINE ---

let scene, camera, renderer, stars, planets = [];
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let currentPlanet = null;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00f2ff, 2, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    createStarfield();
    createPlanets();

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onMouseClick);
}

function createStarfield() {
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
        vertices.push(THREE.MathUtils.randFloatSpread(200), THREE.MathUtils.randFloatSpread(200), THREE.MathUtils.randFloatSpread(200));
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    stars = new THREE.Points(geo, mat);
    scene.add(stars);
}

function createPlanets() {
    const sessionKeys = Object.keys(JS_CONTENT);
    const radius = 10;
    
    sessionKeys.forEach((key, i) => {
        const angle = (i / sessionKeys.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Random color from palette
        const colors = [0x00f2ff, 0xbc13fe, 0xff00ff, 0x00ff00, 0xffff00, 0xff0000];
        const color = colors[i % colors.length];

        const geo = new THREE.SphereGeometry(0.6, 32, 32);
        const mat = new THREE.MeshPhongMaterial({ 
            color: color, 
            emissive: color, 
            emissiveIntensity: 0.5,
            shininess: 100 
        });
        const planet = new THREE.Mesh(geo, mat);
        
        planet.position.set(x, y, 0);
        planet.userData = { sessionKey: key };
        
        scene.add(planet);
        planets.push(planet);

        // Add orbital ring
        const ringGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        scene.add(ring);
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(planets);

    if (intersects.length > 0) {
        const planet = intersects[0].object;
        selectPlanet(planet);
    }
}

function selectPlanet(planet) {
    currentPlanet = planet;
    const key = planet.userData.sessionKey;
    const data = JS_CONTENT[key];

    // Animation: Zoom to planet
    new TWEEN.Tween(camera.position)
        .to({ x: planet.position.x, y: planet.position.y, z: 3 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

    // Open Panel
    showPanel(key, data);
}

function showPanel(key, data) {
    const panel = document.getElementById('content-panel');
    const title = document.getElementById('session-title');
    const container = document.getElementById('concepts-container');

    title.innerText = data.title;
    container.innerHTML = '';

    data.concepts.forEach(concept => {
        const block = document.createElement('div');
        block.className = 'concept-block';
        
        const cTitle = document.createElement('div');
        cTitle.className = 'concept-title';
        cTitle.innerText = concept.name;
        block.appendChild(cTitle);

        concept.questions.forEach((item, idx) => {
            const qItem = document.createElement('div');
            qItem.className = 'question-item';
            
            const qText = document.createElement('div');
            qText.className = 'question-text';
            qText.innerText = `${idx + 1}. ${item.q}`;
            
            const sText = document.createElement('div');
            sText.className = 'solution-text';
            sText.innerText = item.a;

            qItem.appendChild(qText);
            qItem.appendChild(sText);
            
            qItem.onclick = () => {
                sText.classList.toggle('visible');
            };

            block.appendChild(qItem);
        });

        container.appendChild(block);
    });

    panel.classList.remove('hidden');
}

document.getElementById('close-btn').onclick = () => {
    document.getElementById('content-panel').classList.add('hidden');
    new TWEEN.Tween(camera.position)
        .to({ x: 0, y: 0, z: 15 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
};

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();

    // Rotate planets slightly
    planets.forEach(p => {
        p.rotation.y += 0.01;
    });

    // Slowly rotate the whole scene
    scene.rotation.z += 0.001;

    renderer.render(scene, camera);
}

init();
animate();
