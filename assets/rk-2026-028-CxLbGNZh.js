const e={id:"RK-2026-028",title:"Control Flow with Pharmacology Data: if and for in R and Python",date:"2026-09-29",tags:["#ControlFlow","#RProgramming","#Python"],type:"report",template:"standard",readTime:"24 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"This article introduces the general idea of control flow using the same theophylline dataset used in the preceding Bash and R lessons. Students learn how decisions with if and repetition with for express the same programming logic in R and Python, then combine both ideas to inspect concentration values from the real dataset.",content:`
<article>
  <h2>From storing data to controlling what the computer does</h2>

  <p>
    In the previous articles, we followed the same pharmacology dataset through several stages. Bash and <code>grep</code> treated <code>theophylline.csv</code> mainly as lines of text. R then imported the same file as a data frame whose columns could be handled as variables and vectors.
  </p>

  <p>
    We can now ask a new kind of question:
  </p>

  <p>
    <strong>Once the computer has the data, how do we tell it what to do under different conditions, or how to repeat the same operation many times?</strong>
  </p>

  <p>
    This is the basic idea of <strong>control flow</strong>. Control flow determines which instruction runs next.
  </p>

  <h2>1. Control flow before programming syntax</h2>

  <p>
    The simplest program just executes instructions in sequence:
  </p>

  <pre><code>Instruction 1
      ↓
Instruction 2
      ↓
Instruction 3</code></pre>

  <p>
    Real programs also need to make decisions and repeat operations.
  </p>

  <h3>Decision</h3>

  <pre><code>Is a condition true?
        ↓
      yes / no</code></pre>

  <p>
    An <code>if</code> statement represents this idea:
    <strong>if a condition is true, perform an action.</strong>
  </p>

  <p>
    In a pharmacology-data workflow, that might mean:
  </p>

  <p>
    <strong>If this observation satisfies a condition, perform an action.</strong>
  </p>

  <h3>Repetition</h3>

  <pre><code>Take next value
      ↓
perform operation
      ↓
take next value
      ↓
     ...</code></pre>

  <p>
    A <code>for</code> loop represents this idea:
    <strong>for every value in a collection, perform an action.</strong>
  </p>

  <p>
    These ideas do not belong specifically to R or Python. R and Python merely express the same logic using different syntax. Official documentation for both languages defines <code>if</code> and <code>for</code> as core control-flow constructs. @rControlFlow; @pythonControlFlow
  </p>

  <h2>Part A — Make one decision with if</h2>

  <h3>2. Begin with one concentration value</h3>

  <p>
    Consider one concentration value:
  </p>

  <pre><code>6.57</code></pre>

  <p>
    Suppose we want the computer to report whether this value is greater than <code>5</code>.
  </p>

  <p>
    <strong>The value 5 is used only as an arbitrary programming threshold for this lesson. It is not being presented as a therapeutic, toxic, clinical, or pharmacokinetic cutoff.</strong>
  </p>

  <p>
    The logic is:
  </p>

  <pre><code>IF concentration &gt; 5
THEN print "Above 5 mg/L"</code></pre>

  <p>
    The important part is the decision:
    <strong>evaluate a condition → if true, perform an action.</strong>
  </p>

  <h3>3. The decision in R</h3>

  <pre><code>concentration &lt;- 6.57

if (concentration &gt; 5) {
  print("Above 5 mg/L")
}</code></pre>

  <p>
    Only four syntax ideas are needed:
  </p>

  <ul>
    <li><code>if</code> begins the decision;</li>
    <li><code>( )</code> contains the condition;</li>
    <li><code>&gt;</code> means greater than;</li>
    <li><code>{ }</code> contains the action performed when the condition is true.</li>
  </ul>

  <h3>4. The same decision in Python</h3>

  <pre><code>concentration = 6.57

if concentration &gt; 5:
    print("Above 5 mg/L")</code></pre>

  <p>
    Compare the structure directly:
  </p>

  <table class="science-table" data-id="rk-2026-028-if-comparison">
    <caption>Table 1: The same decision expressed in R and Python.</caption>
    <thead>
      <tr>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>if (condition) { action }</code></td>
        <td><code>if condition: action</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    The punctuation differs, but the logic is identical:
    <strong>test a condition and perform the action when it is true.</strong>
  </p>

  <h2>5. Add an alternative with else</h2>

  <p>
    What should happen when the condition is false?
  </p>

  <pre><code>IF condition is true
    do A
ELSE
    do B</code></pre>

  <h3>R</h3>

  <pre><code>concentration &lt;- 6.57

if (concentration &gt; 5) {
  print("Above 5 mg/L")
} else {
  print("5 mg/L or below")
}</code></pre>

  <h3>Python</h3>

  <pre><code>concentration = 6.57

if concentration &gt; 5:
    print("Above 5 mg/L")
else:
    print("5 mg/L or below")</code></pre>

  <p>
    In both languages, <code>else</code> provides an alternative path. A program can therefore follow different instructions depending on whether the condition is true or false. @rControlFlow; @pythonControlFlow
  </p>

  <h2>Part B — Use a value from the actual dataset</h2>

  <h3>6. Retrieve the same observation in R</h3>

  <p>
    Import the dataset as before:
  </p>

  <pre><code>theoph &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)</code></pre>

  <p>
    The third data row contains a concentration of <code>6.57</code>. Retrieve it:
  </p>

  <pre><code>concentration &lt;- theoph$CONC[3]

if (concentration &gt; 5) {
  print("Above 5 mg/L")
}</code></pre>

  <h3>Retrieve the same observation in Python</h3>

  <p>
    Python's standard <code>csv</code> module can read CSV records. <code>DictReader</code> represents each row using the column names from the header. @pythonCsv
  </p>

  <pre><code>import csv

with open("theophylline.csv", newline="") as file:
    rows = list(csv.DictReader(file))

concentration = float(rows[2]["CONC"])

if concentration &gt; 5:
    print("Above 5 mg/L")</code></pre>

  <p>
    Python list positions begin at 0, so <code>rows[2]</code> refers to the third data row. We are not trying to learn Python file handling in depth here. The important point is that both languages retrieve the same value and apply the same decision to it.
  </p>

  <h2>Part C — Repetition with for</h2>

  <h3>7. Why do we need a loop?</h3>

  <p>
    Consider several concentration values from Subject 1:
  </p>

  <pre><code>2.84
6.57
10.50
9.66
8.58</code></pre>

  <p>
    We already know how to test one value. But we do not want to write the same code separately for every concentration.
  </p>

  <p>
    A <code>for</code> loop repeats an operation once for each value in a collection:
  </p>

  <pre><code>FOR each concentration
        ↓
perform an action
        ↓
move to next concentration
        ↓
       ...</code></pre>

  <h3>8. A simple for loop in R</h3>

  <pre><code>concentrations &lt;- c(2.84, 6.57, 10.50, 9.66, 8.58)

for (concentration in concentrations) {
  print(concentration)
}</code></pre>

  <p>
    Here:
  </p>

  <ul>
    <li><code>concentrations</code> is a vector containing several values;</li>
    <li><code>concentration</code> represents one value at a time;</li>
    <li>the loop repeats until every value has been processed.</li>
  </ul>

  <h3>9. The same loop in Python</h3>

  <pre><code>concentrations = [2.84, 6.57, 10.50, 9.66, 8.58]

for concentration in concentrations:
    print(concentration)</code></pre>

  <p>
    Again, compare the structure:
  </p>

  <table class="science-table" data-id="rk-2026-028-for-comparison">
    <caption>Table 2: The same repetition expressed in R and Python.</caption>
    <thead>
      <tr>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>for (value in values) { action }</code></td>
        <td><code>for value in values: action</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    The common pattern is:
    <strong>for → one value → in → collection → repeated action.</strong>
  </p>

  <h2>Part D — Combine repetition and decision</h2>

  <h3>10. The main control-flow pattern: for + if</h3>

  <p>
    Now ask:
  </p>

  <p>
    <strong>Can the computer examine every concentration and report only those greater than our arbitrary demonstration value of 5 mg/L?</strong>
  </p>

  <p>
    The logic is:
  </p>

  <pre><code>FOR each concentration
        ↓
IF concentration &gt; 5
        ↓
print concentration
        ↓
move to next value</code></pre>

  <h3>R</h3>

  <pre><code>concentrations &lt;- c(2.84, 6.57, 10.50, 9.66, 8.58)

for (concentration in concentrations) {
  if (concentration &gt; 5) {
    print(concentration)
  }
}</code></pre>

  <h3>Python</h3>

  <pre><code>concentrations = [2.84, 6.57, 10.50, 9.66, 8.58]

for concentration in concentrations:
    if concentration &gt; 5:
        print(concentration)</code></pre>

  <p>
    Both programs report:
  </p>

  <pre><code>6.57
10.50
9.66
8.58</code></pre>

  <p>
    This is the central control-flow pattern for the article:
    <strong>repeat + decide.</strong>
  </p>

  <h2>Part E — Apply for + if to the full CONC column</h2>

  <h3>11. The dataset contains missing concentration entries</h3>

  <p>
    The time-zero rows in <code>theophylline.csv</code> contain <code>.</code> in the <code>CONC</code> field. In R, we imported those entries as <code>NA</code>. Before comparing a concentration with 5, we must first make sure a numeric value is actually present.
  </p>

  <p>
    Conceptually:
  </p>

  <pre><code>read concentration
        ↓
is a value present?
        ↓
does it satisfy the condition?
        ↓
if yes, print it
        ↓
move to next observation</code></pre>

  <h3>R</h3>

  <pre><code>theoph &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)

for (concentration in theoph$CONC) {
  if (!is.na(concentration)) {
    if (concentration &gt; 5) {
      print(concentration)
    }
  }
}</code></pre>

  <p>
    <code>is.na(concentration)</code> asks whether the value is missing. The <code>!</code> reverses that result, so the inner comparison is attempted only when a concentration value is present.
  </p>

  <h3>Python</h3>

  <pre><code>import csv

with open("theophylline.csv", newline="") as file:
    rows = csv.DictReader(file)

    for row in rows:
        if row["CONC"] != ".":
            concentration = float(row["CONC"])

            if concentration &gt; 5:
                print(concentration)</code></pre>

  <p>
    The CSV module initially supplies field values as text. We first exclude the <code>.</code> marker, then convert a valid <code>CONC</code> value with <code>float()</code>, and only then compare it numerically.
  </p>

  <p>
    The syntax is different, but the algorithm is the same:
    <strong>take a value → confirm it is usable → test the condition → perform the action → continue.</strong>
  </p>

  <h2>Part F — Conditions can ask different questions</h2>

  <p>
    Control flow is not limited to concentration thresholds. Conditions can use other variables already present in the dataset.
  </p>

  <h3>Equality: is the sampling time zero?</h3>

  <table class="science-table" data-id="rk-2026-028-time-equality">
    <caption>Table 3: Testing equality in R and Python.</caption>
    <thead>
      <tr>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>if (time == 0) { print("Time zero") }</code></td>
        <td><code>if time == 0: print("Time zero")</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    In both languages, <code>==</code> tests equality. It is different from assignment: R commonly uses <code>&lt;-</code> for assignment, while Python uses <code>=</code>. R's relational operators include <code>==</code>, <code>&gt;</code>, <code>&lt;</code>, and <code>!=</code>. @rComparison
  </p>

  <h3>Text/category comparison: is the recorded sex F?</h3>

  <table class="science-table" data-id="rk-2026-028-text-equality">
    <caption>Table 4: The same equality idea can be applied to a text/category value.</caption>
    <thead>
      <tr>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>if (sex == "F") { print("F category") }</code></td>
        <td><code>if sex == "F": print("F category")</code></td>
      </tr>
    </tbody>
  </table>

  <h3>Numerical comparison: is sampling time greater than 12?</h3>

  <table class="science-table" data-id="rk-2026-028-time-comparison">
    <caption>Table 5: Greater-than comparison using a sampling-time value.</caption>
    <thead>
      <tr>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>if (time &gt; 12) { print("After 12") }</code></td>
        <td><code>if time &gt; 12: print("After 12")</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    These are programming examples, not pharmacological interpretations. The important lesson is that conditions can compare numeric values or category/text values.
  </p>

  <h2>R and Python: same ideas, different syntax</h2>

  <table class="science-table" data-id="rk-2026-028-language-correspondence">
    <caption>Table 6: Basic control-flow correspondence between R and Python.</caption>
    <thead>
      <tr>
        <th scope="col">Concept</th>
        <th scope="col">R</th>
        <th scope="col">Python</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Assign value</td>
        <td><code>&lt;-</code></td>
        <td><code>=</code></td>
      </tr>
      <tr>
        <td>Decision</td>
        <td><code>if (...) { }</code></td>
        <td><code>if ...:</code></td>
      </tr>
      <tr>
        <td>Alternative</td>
        <td><code>else</code></td>
        <td><code>else:</code></td>
      </tr>
      <tr>
        <td>Repeat</td>
        <td><code>for (... in ...) { }</code></td>
        <td><code>for ... in ...:</code></td>
      </tr>
      <tr>
        <td>Equality test</td>
        <td><code>==</code></td>
        <td><code>==</code></td>
      </tr>
      <tr>
        <td>Greater than</td>
        <td><code>&gt;</code></td>
        <td><code>&gt;</code></td>
      </tr>
      <tr>
        <td>Less than</td>
        <td><code>&lt;</code></td>
        <td><code>&lt;</code></td>
      </tr>
      <tr>
        <td>Not equal</td>
        <td><code>!=</code></td>
        <td><code>!=</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    Students are not learning two different control-flow ideas. They are learning one programming idea expressed in two languages.
  </p>

  <h2>Final conceptual model</h2>

  <pre><code>DATA
  ↓
ONE VALUE
  ↓
IF
"Should something happen?"
  ↓
MANY VALUES
  ↓
FOR
"Repeat an operation"
  ↓
FOR + IF
"Examine every value and decide what to do"</code></pre>

  <p>
    Across the article sequence, the workflow now looks like this:
  </p>

  <pre><code>Raw CSV
   ↓
Bash / grep
inspect and search text
   ↓
R data frame / vectors
represent structured data
   ↓
Control flow
decide and repeat
   ↓
NEXT: visualize the data</code></pre>

  <h2>What should you remember?</h2>

  <ul>
    <li>Control flow determines which instructions execute and how often.</li>
    <li><code>if</code> represents a decision.</li>
    <li><code>else</code> provides an alternative path.</li>
    <li><code>for</code> repeats an operation for values in a collection.</li>
    <li><code>for</code> and <code>if</code> can be combined to examine every value and act only when a condition is satisfied.</li>
    <li>R and Python use different punctuation and block structure, but the underlying logic is the same.</li>
    <li>Missing or non-numeric entries must be handled before numerical comparisons are made.</li>
  </ul>

  <h2>Where we stop</h2>

  <p>
    We will not add more programming constructs here. No <code>while</code> loops, loop-control statements, functions, list comprehensions, or advanced Boolean expressions are required for this lesson.
  </p>

  <p>
    The next article can keep the same dataset and move from <strong>deciding and repeating</strong> to <strong>visualizing</strong>, using bar, scatter, and line plots in R and Python.
  </p>

  <h2>Further reading</h2>

  <ul>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-patched/library/base/html/Control.html" target="_blank" rel="noopener noreferrer">
        R documentation: control flow
      </a>
      @rControlFlow
    </li>
    <li>
      <a href="https://www.stat.ethz.ch/R-manual/R-devel/library/base/html/Comparison.html" target="_blank" rel="noopener noreferrer">
        R documentation: relational operators
      </a>
      @rComparison
    </li>
    <li>
      <a href="https://docs.python.org/3/tutorial/controlflow.html" target="_blank" rel="noopener noreferrer">
        Python tutorial: control flow
      </a>
      @pythonControlFlow
    </li>
    <li>
      <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener noreferrer">
        Python documentation: CSV file reading
      </a>
      @pythonCsv
    </li>
  </ul>
</article>
  `};export{e as default};
