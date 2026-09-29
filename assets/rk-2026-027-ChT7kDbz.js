const e={id:"RK-2026-027",title:"From CSV Text to R Data: Basic Syntax, Data Frames, and Vectors",date:"2026-09-29",tags:["#RProgramming","#DataFrames","#Vectors"],type:"report",template:"standard",readTime:"22 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"This article continues directly from the Bash and grep workflow by importing the same pharmacology CSV into R. Students learn the basic syntax of assignment and function calls, recognize the imported table as a data frame, extract individual columns as vectors, and perform simple indexing and numeric operations without yet moving into plotting or statistical analysis.",content:`
<article>
  <h2>From text lines to a structured dataset</h2>

  <p>
    In the previous article, we treated <code>theophylline.csv</code> as a text file. Bash commands such as <code>head</code> and <code>grep</code> helped us inspect lines, retrieve Subject 1, count records, and exclude records.
  </p>

  <p>
    That was useful, but <code>grep</code> was still working with characters in lines. It did not inherently know that <code>TIME</code> represents sampling time, <code>CONC</code> contains concentration values, or <code>WEIGHT</code> contains numerical measurements.
  </p>

  <p>
    We will now give the <strong>same file</strong> to R. Our goal is not to learn all of R at once. We only need enough R syntax to understand two important structures:
  </p>

  <ul>
    <li><strong>data frame</strong> — the whole rectangular dataset;</li>
    <li><strong>vector</strong> — one ordered collection of values, such as one column.</li>
  </ul>

  <p>
    The progression will be:
    <strong>CSV file → import into R → data frame → choose a column → vector → inspect values.</strong>
  </p>

  <h2>1. Import the same CSV into R</h2>

  <p>
    Place <code>theophylline.csv</code> in R's current working directory. Then run:
  </p>

  <pre><code>theoph &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)</code></pre>

  <p>
    This small command introduces several pieces of basic R syntax.
  </p>

  <table class="science-table" data-id="rk-2026-027-first-command">
    <caption>Table 1: Reading the first R import command.</caption>
    <thead>
      <tr>
        <th scope="col">Part</th>
        <th scope="col">Meaning here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>theoph</code></td>
        <td>The name we are giving to the R object that will contain the dataset.</td>
      </tr>
      <tr>
        <td><code>&lt;-</code></td>
        <td>Assignment: store the result on the right in the object named on the left.</td>
      </tr>
      <tr>
        <td><code>read.csv()</code></td>
        <td>A function used to read a comma-separated file.</td>
      </tr>
      <tr>
        <td><code>"theophylline.csv"</code></td>
        <td>A character string giving the file name.</td>
      </tr>
      <tr>
        <td><code>na.strings = "."</code></td>
        <td>Tells R that <code>.</code> in this file should be interpreted as a missing value.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Official R documentation states that <code>read.csv()</code> reads tabular input and returns a data frame. It also allows character strings specified through <code>na.strings</code> to be treated as missing values. @rReadCsv
  </p>

  <h3>Why tell R about the dot?</h3>

  <p>
    The supplied file contains entries such as:
  </p>

  <pre><code>1,4.02,0,.,79.6,M
1,.,0.25,2.84,79.6,M</code></pre>

  <p>
    In this file, <code>.</code> marks a value that is not recorded or not applicable in that field. If we import the file with <code>na.strings = "."</code>, R converts those entries to <code>NA</code>, its standard missing-value marker. @rMissingValues
  </p>

  <p>
    We will not turn this article into a missing-data lesson. For now, the important point is simply that we have told R how to interpret the file correctly.
  </p>

  <h2>2. Inspect the object R created</h2>

  <p>
    Start with:
  </p>

  <pre><code>head(theoph)</code></pre>

  <p>
    A simplified view of the first rows is:
  </p>

  <pre><code>  ID  AMT TIME  CONC WEIGHT SEX
1  1 4.02 0.00    NA   79.6   M
2  1   NA 0.25  2.84   79.6   M
3  1   NA 0.57  6.57   79.6   M
4  1   NA 1.12 10.50   79.6   M
5  1   NA 2.02  9.66   79.6   M
6  1   NA 3.82  8.58   79.6   M</code></pre>

  <p>
    This should look familiar. It is the same dataset we inspected from the terminal, but R has now organized it into rows and columns.
  </p>

  <p>
    Next ask for its dimensions:
  </p>

  <pre><code>dim(theoph)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] 132   6</code></pre>

  <p>
    This means the object has <strong>132 rows and 6 columns</strong>. For a data frame, <code>dim()</code> reports the number of rows and columns. @rDim
  </p>

  <p>
    Ask for the column names:
  </p>

  <pre><code>names(theoph)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] "ID"     "AMT"    "TIME"   "CONC"   "WEIGHT" "SEX"</code></pre>

  <h2>3. The whole table is a data frame</h2>

  <p>
    In R, <code>theoph</code> is a <strong>data frame</strong>. R documentation describes data frames as collections of variables that share the same number of rows and can contain columns of different types. @rDataFrame
  </p>

  <p>
    For this dataset, a useful mental model is:
  </p>

  <table class="science-table" data-id="rk-2026-027-data-frame-model">
    <caption>Table 2: A simple interpretation of the imported data frame.</caption>
    <thead>
      <tr>
        <th scope="col">Part of the table</th>
        <th scope="col">Interpretation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>One row</td>
        <td>One record or observation in the file.</td>
      </tr>
      <tr>
        <td>One column</td>
        <td>One variable, such as <code>TIME</code>, <code>CONC</code>, or <code>WEIGHT</code>.</td>
      </tr>
      <tr>
        <td>The whole table</td>
        <td>The data frame named <code>theoph</code>.</td>
      </tr>
    </tbody>
  </table>

  <p>
    You can confirm the object's class:
  </p>

  <pre><code>class(theoph)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] "data.frame"</code></pre>

  <p>
    This is the main conceptual change from the previous article. In Bash we mostly saw lines of text. In R we now have one object whose rows and columns have a structured relationship.
  </p>

  <h2>4. Select one column with the dollar sign</h2>

  <p>
    Suppose we want only the sampling-time column. Use:
  </p>

  <pre><code>theoph$TIME</code></pre>

  <p>
    The dollar sign <code>$</code> selects a named component of a data frame. R's data-frame extraction methods support this form for accessing a column by name. @rDataFrameExtract
  </p>

  <p>
    We can do the same for other columns:
  </p>

  <pre><code>theoph$WEIGHT
theoph$SEX
theoph$CONC</code></pre>

  <p>
    A useful way to visualize this is:
  </p>

  <pre><code>theoph
  |
  |-- ID
  |-- AMT
  |-- TIME
  |-- CONC
  |-- WEIGHT
  |-- SEX</code></pre>

  <p>
    The data frame contains the whole table. The expression <code>theoph$TIME</code> asks for one named column from that table.
  </p>

  <h2>5. A column can be handled as a vector</h2>

  <p>
    Store the <code>TIME</code> column in a new object:
  </p>

  <pre><code>time &lt;- theoph$TIME</code></pre>

  <p>
    Now <code>time</code> is an ordered collection of the sampling-time values. At this level, we can think of it as a <strong>vector</strong>.
  </p>

  <p>
    The same idea works for other columns:
  </p>

  <pre><code>weight &lt;- theoph$WEIGHT
sex &lt;- theoph$SEX</code></pre>

  <p>
    These vectors contain different kinds of information:
  </p>

  <ul>
    <li><code>time</code> contains numeric sampling-time values;</li>
    <li><code>weight</code> contains numeric weight values;</li>
    <li><code>sex</code> contains character values such as <code>"M"</code> and <code>"F"</code>.</li>
  </ul>

  <p>
    We do not need a detailed tour of R's type system yet. The important idea is that a vector holds a sequence of related values, while a data frame organizes several variables together.
  </p>

  <h2>6. Ask simple questions about a vector</h2>

  <p>
    Once the <code>TIME</code> column has been extracted, basic R functions can operate on it directly.
  </p>

  <h3>How many values are in the vector?</h3>

  <pre><code>length(time)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] 132</code></pre>

  <p>
    The vector contains one <code>TIME</code> value for each of the 132 rows. For vectors, <code>length()</code> returns the number of elements. @rLength
  </p>

  <h3>What is the first value?</h3>

  <pre><code>time[1]</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] 0</code></pre>

  <p>
    Square brackets are used here for indexing: <code>[1]</code> asks for the first element.
  </p>

  <h3>What are the first five values?</h3>

  <pre><code>time[1:5]</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] 0.00 0.25 0.57 1.12 2.02</code></pre>

  <p>
    The expression <code>1:5</code> creates the sequence 1, 2, 3, 4, 5, so the command retrieves those positions from the vector.
  </p>

  <h2>7. R now recognizes TIME as numeric data</h2>

  <p>
    In the terminal, <code>grep</code> could search for characters that looked like time values. In R, the imported <code>TIME</code> column is numeric, so numerical functions can operate on it.
  </p>

  <p>
    For example:
  </p>

  <pre><code>min(time)
max(time)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1] 0
[1] 24.65</code></pre>

  <p>
    Or:
  </p>

  <pre><code>range(time)</code></pre>

  <p>
    Output:
  </p>

  <pre><code>[1]  0.00 24.65</code></pre>

  <p>
    We are not performing a pharmacokinetic analysis here. These commands simply demonstrate the payoff of importing the CSV correctly: R can now treat values in a numeric column as numbers rather than merely characters in a line.
  </p>

  <h2>8. Connect the main ideas</h2>

  <table class="science-table" data-id="rk-2026-027-concept-summary">
    <caption>Table 3: The main R ideas introduced using the pharmacology dataset.</caption>
    <thead>
      <tr>
        <th scope="col">R expression</th>
        <th scope="col">Concept</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>theoph &lt;- read.csv(...)</code></td>
        <td>Call a function and assign its result to an object.</td>
      </tr>
      <tr>
        <td><code>head(theoph)</code></td>
        <td>Inspect the beginning of the imported object.</td>
      </tr>
      <tr>
        <td><code>dim(theoph)</code></td>
        <td>Inspect the number of rows and columns.</td>
      </tr>
      <tr>
        <td><code>names(theoph)</code></td>
        <td>Inspect the variable/column names.</td>
      </tr>
      <tr>
        <td><code>theoph</code></td>
        <td>The whole data frame.</td>
      </tr>
      <tr>
        <td><code>theoph$TIME</code></td>
        <td>Select one named column.</td>
      </tr>
      <tr>
        <td><code>time &lt;- theoph$TIME</code></td>
        <td>Assign that column to a vector object.</td>
      </tr>
      <tr>
        <td><code>time[1]</code></td>
        <td>Select one vector element by position.</td>
      </tr>
      <tr>
        <td><code>time[1:5]</code></td>
        <td>Select several vector elements by position.</td>
      </tr>
      <tr>
        <td><code>length(time)</code></td>
        <td>Count the elements in the vector.</td>
      </tr>
    </tbody>
  </table>

  <h2>What should you understand before moving on?</h2>

  <p>
    You do not need to memorize every R function from this article. The important ideas are structural:
  </p>

  <ol>
    <li>A CSV file can be imported into R with <code>read.csv()</code>.</li>
    <li><code>&lt;-</code> assigns a value or result to an object name.</li>
    <li>Functions use parentheses, as in <code>head(theoph)</code>.</li>
    <li>The imported table is a <strong>data frame</strong>.</li>
    <li>Rows represent records and columns represent variables.</li>
    <li><code>$</code> can select a named column from a data frame.</li>
    <li>A selected column can be treated as a <strong>vector</strong>.</li>
    <li>Square brackets can select vector elements by position.</li>
    <li>Numeric vectors can be used directly with numerical functions.</li>
  </ol>

  <h2>From grep to R</h2>

  <p>
    The Bash and R workflows now connect naturally:
  </p>

  <pre><code>Bash / grep
theophylline.csv
      |
      | inspect lines and text
      v
R
read.csv(...)
      |
      v
data frame: theoph
      |
      | choose a column with $
      v
vector: theoph$TIME
      |
      | indexing and numeric functions
      v
values that R can operate on as data</code></pre>

  <p>
    <code>grep</code> remains useful for rapid inspection of text files. R becomes useful when we want the file interpreted as a structured dataset whose columns can participate in calculations and later analyses.
  </p>

  <h2>Where we stop</h2>

  <p>
    We have intentionally not introduced plotting, loops, statistical tests, or complex data manipulation. The purpose of this article is to establish the language needed for those later tasks:
    <strong>R syntax, objects, data frames, columns, vectors, and simple indexing.</strong>
  </p>

  <p>
    The next step can build directly on the same <code>theoph</code> data frame and ask how numerical variables such as <code>TIME</code> and <code>CONC</code> can be summarized, compared, and eventually visualized.
  </p>

  <h2>Further reading</h2>

  <ul>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/utils/html/read.table.html" target="_blank" rel="noopener noreferrer">
        R documentation: importing tabular and CSV data
      </a>
      @rReadCsv
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/base/html/data.frame.html" target="_blank" rel="noopener noreferrer">
        R documentation: data frames
      </a>
      @rDataFrame
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/base/help/%2B5B.data.frame.html" target="_blank" rel="noopener noreferrer">
        R documentation: extracting parts of a data frame
      </a>
      @rDataFrameExtract
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/base/html/NA.html" target="_blank" rel="noopener noreferrer">
        R documentation: missing values and NA
      </a>
      @rMissingValues
    </li>
  </ul>
</article>
  `};export{e as default};
