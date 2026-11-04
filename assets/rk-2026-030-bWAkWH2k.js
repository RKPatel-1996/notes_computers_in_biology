const e="/notes_computers_in_biology/assets/rk-2026-030-fig1-bar-DyhW1vri.png",t="/notes_computers_in_biology/assets/rk-2026-030-fig2-scatter-B05VfNAw.png",a="/notes_computers_in_biology/assets/rk-2026-030-fig3-line-BTMvj77h.png",o={id:"RK-2026-030",title:"Creating Bar, Scatter, and Line Plots in R with Pharmacology Data",date:"2026-09-29",tags:["#RProgramming","#DataVisualization","#BaseR"],type:"report",template:"standard",readTime:"22 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"This article recreates the same three visualization questions from the preceding Python lesson using base R. Students read the same theophylline CSV, select the same variables, create bar, scatter, and line plots, and see that the scientific question and data remain unchanged even though the plotting syntax is different.",content:`
<article>
  <h2>The questions have not changed</h2>

  <p>
    In the previous article, Python created three plots from <code>theophylline.csv</code>. We used each plot because it answered a different question about the same pharmacological dataset.
  </p>

  <pre><code>COMPARE CATEGORIES
Subject → Weight
        ↓
       BAR

RELATIONSHIP
Time ↔ Concentration
        ↓
     SCATTER

CHANGE THROUGH TIME
Time → Concentration for one subject
        ↓
       LINE</code></pre>

  <p>
    We are not selecting new plots in this article. We are asking <strong>R to create the same representations of the same data</strong>.
  </p>

  <p>
    The central message is:
    <strong>the question and the data have not changed. Only the language used to produce the plot has changed.</strong>
  </p>

  <h2>Part A — Load the dataset in R</h2>

  <h3>1. Read the same CSV</h3>

  <pre><code>data &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)</code></pre>

  <p>
    This should already look familiar:
  </p>

  <ul>
    <li><code>read.csv()</code> reads the comma-separated file;</li>
    <li><code>&lt;-</code> assigns the result to an object called <code>data</code>;</li>
    <li><code>na.strings = "."</code> tells R to interpret the dot used in this file as a missing value.</li>
  </ul>

  <p>
    Official R documentation describes <code>read.csv()</code> as a convenience form of the tabular data-import functions and documents <code>na.strings</code> for specifying strings that should be interpreted as missing values. @rReadCsv
  </p>

  <p>
    Check the beginning of the imported data:
  </p>

  <pre><code>head(data)</code></pre>

  <p>
    We will not reteach data frames here. The important point is that the same CSV is now available as the R data frame <code>data</code>, and columns such as <code>TIME</code>, <code>CONC</code>, and <code>WEIGHT</code> can be accessed with <code>$</code>.
  </p>

  <h2>Part B — Bar plot in R</h2>

  <h3>2. Ask the same categorical comparison question</h3>

  <p>
    Our first question remains:
  </p>

  <p>
    <strong>How do the body weights of the study subjects compare?</strong>
  </p>

  <p>
    Each subject appears repeatedly because multiple concentration measurements were collected. The weight value is therefore repeated across that subject's rows. We only need one row per subject for this plot:
  </p>

  <pre><code>subjects &lt;- data[!duplicated(data$ID), ]</code></pre>

  <p>
    <code>duplicated(data$ID)</code> identifies repeated subject IDs. The <code>!</code> reverses that logical result, so the expression keeps the first occurrence of each subject. R documents <code>duplicated()</code> as returning a logical vector that marks duplicate elements. @rDuplicated
  </p>

  <h3>3. Create the bar plot</h3>

  <pre><code>barplot(
  subjects$WEIGHT,
  names.arg = subjects$ID
)</code></pre>

  <p>
    The essential structure is:
  </p>

  <ul>
    <li><code>subjects$WEIGHT</code> supplies the heights of the bars;</li>
    <li><code>subjects$ID</code> supplies the category labels underneath them.</li>
  </ul>

  <p>
    Base R's <code>barplot()</code> accepts a vector of bar heights, and <code>names.arg</code> supplies labels for the bars. @rBarplot
  </p>

  <h3>4. Add labels and a title</h3>

  <pre><code>barplot(
  subjects$WEIGHT,
  names.arg = subjects$ID,
  xlab = "Subject",
  ylab = "Weight",
  main = "Body Weight of Study Subjects"
)</code></pre>

  <p>
    In base R, axis labels and the title can be supplied directly as arguments inside the plotting function.
  </p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="${e}">
    <img
      src="${e}"
      alt="Bar plot showing one body-weight value for each of the twelve study subjects."
    />
    <figcaption>
      Figure 1: Bar plot comparing body weight across subjects. One row per subject is retained because the weight value is repeated across that subject's concentration records.
    </figcaption>
  </figure>

  <p>
    The scientific purpose is exactly the same as in Python: compare one numerical value across discrete subject categories.
  </p>

  <h2>Part C — Scatter plot in R</h2>

  <h3>5. Return to the same relationship question</h3>

  <p>
    Our second question is:
  </p>

  <p>
    <strong>What relationship do we see between sampling time and measured concentration?</strong>
  </p>

  <p>
    We again use two numerical variables:
  </p>

  <pre><code>data$TIME
data$CONC</code></pre>

  <p>
    These expressions should reinforce an earlier R idea:
  </p>

  <ul>
    <li><code>data$TIME</code> is the x vector;</li>
    <li><code>data$CONC</code> is the y vector.</li>
  </ul>

  <p>
    Corresponding positions in the two vectors describe one time-concentration observation.
  </p>

  <h3>6. Create the scatter plot</h3>

  <pre><code>plot(
  data$TIME,
  data$CONC,
  xlab = "Time (hours)",
  ylab = "Theophylline concentration",
  main = "Concentration versus Time"
)</code></pre>

  <p>
    With two numerical vectors and the default plotting type, base R's default <code>plot()</code> method produces a scatter-style plot of y versus x. The same function also accepts arguments such as <code>xlab</code>, <code>ylab</code>, and <code>main</code>. @rPlotDefault
  </p>

  <figure class="science-figure" data-id="FIG-2" data-clean-src="${t}">
    <img
      src="${t}"
      alt="Scatter plot of sampling time against theophylline concentration with observations from all subjects shown together."
    />
    <figcaption>
      Figure 2: Scatter plot of sampling time against concentration for the available observations. Each plotted point represents one paired time-concentration record, and multiple subjects are shown together.
    </figcaption>
  </figure>

  <p>
    Nothing about the scientific interpretation changed when we moved from Python to R. A scatter plot still represents paired numerical observations as points.
  </p>

  <h2>Part D — Line plot in R</h2>

  <h3>7. Follow Subject 1 through ordered time</h3>

  <p>
    Our third question remains:
  </p>

  <p>
    <strong>How does the concentration of Subject 1 change over time?</strong>
  </p>

  <p>
    First select Subject 1:
  </p>

  <pre><code>subject1 &lt;- data[data$ID == 1, ]</code></pre>

  <p>
    Then make sure the records are ordered by sampling time:
  </p>

  <pre><code>subject1 &lt;- subject1[order(subject1$TIME), ]</code></pre>

  <p>
    These are supporting operations. The filtering expression keeps rows belonging to Subject 1, while <code>order()</code> returns an ordering that can rearrange the rows by increasing <code>TIME</code>. @rOrder
  </p>

  <h3>8. Create the line plot</h3>

  <pre><code>plot(
  subject1$TIME,
  subject1$CONC,
  type = "l",
  xlab = "Time (hours)",
  ylab = "Theophylline concentration",
  main = "Concentration-Time Profile: Subject 1"
)</code></pre>

  <p>
    The important new argument is:
  </p>

  <pre><code>type = "l"</code></pre>

  <p>
    Here <code>"l"</code> requests lines. Base R's default plotting method documents <code>type</code> as the plotting type used for the graph. @rPlotDefault
  </p>

  <figure class="science-figure" data-id="FIG-3" data-clean-src="${a}">
    <img
      src="${a}"
      alt="Line plot showing Subject 1 theophylline concentration across ordered sampling times."
    />
    <figcaption>
      Figure 3: Concentration-time profile for Subject 1. Connecting successive observations emphasizes progression across ordered sampling times. The baseline concentration is missing in the teaching CSV, so the visible concentration profile begins at the first available measured value.
    </figcaption>
  </figure>

  <h3>Optional: show both points and connecting lines</h3>

  <p>
    If you want to make the individual observations more visible while still connecting them, base R also supports:
  </p>

  <pre><code>plot(
  subject1$TIME,
  subject1$CONC,
  type = "b",
  xlab = "Time (hours)",
  ylab = "Theophylline concentration",
  main = "Concentration-Time Profile: Subject 1"
)</code></pre>

  <p>
    For this beginner article, it is enough to know that <code>type = "l"</code> gives a line representation and <code>type = "b"</code> can display both points and lines. We do not need the other plotting types yet.
  </p>

  <h2>Part E — R and Python side by side</h2>

  <p>
    The plotting questions, x values, and y values are unchanged. Only the language syntax differs.
  </p>

  <table class="science-table" data-id="rk-2026-030-language-comparison">
    <caption>Table 1: Equivalent beginner plotting calls in Python and base R.</caption>
    <thead>
      <tr>
        <th scope="col">Plot</th>
        <th scope="col">Python</th>
        <th scope="col">R</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bar</td>
        <td><code>plt.bar(x, y)</code></td>
        <td><code>barplot(y, names.arg = x)</code></td>
      </tr>
      <tr>
        <td>Scatter</td>
        <td><code>plt.scatter(x, y)</code></td>
        <td><code>plot(x, y)</code></td>
      </tr>
      <tr>
        <td>Line</td>
        <td><code>plt.plot(x, y)</code></td>
        <td><code>plot(x, y, type = "l")</code></td>
      </tr>
    </tbody>
  </table>

  <p>
    This comparison is the central lesson:
  </p>

  <p>
    <strong>same x data + same y data + same visual purpose → different language syntax</strong>
  </p>

  <h2>Part F — One useful difference in plotting style</h2>

  <p>
    In the Python workflow, we often wrote separate commands:
  </p>

  <pre><code>plt.scatter(x, y)
plt.xlabel("...")
plt.ylabel("...")
plt.title("...")
plt.show()</code></pre>

  <p>
    In basic R plotting, several of those instructions can be supplied directly inside the plotting function:
  </p>

  <pre><code>plot(
  x,
  y,
  xlab = "...",
  ylab = "...",
  main = "..."
)</code></pre>

  <p>
    Neither approach is inherently better for this lesson. They simply organize plotting instructions differently.
  </p>

  <p>
    Another beginner-visible difference is that an interactive R session usually draws the plot when the plotting function is executed; there is no direct equivalent of the explicit <code>plt.show()</code> step required in the Python examples from the previous article.
  </p>

  <h2>Part G — Plot choice is language-independent</h2>

  <table class="science-table" data-id="rk-2026-030-plot-choice">
    <caption>Table 2: The scientific question determines the plot type, regardless of programming language.</caption>
    <thead>
      <tr>
        <th scope="col">Data or question</th>
        <th scope="col">Plot</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Compare values across categories</td>
        <td>Bar</td>
      </tr>
      <tr>
        <td>Examine the relationship between two numerical variables</td>
        <td>Scatter</td>
      </tr>
      <tr>
        <td>Follow a value across ordered time</td>
        <td>Line</td>
      </tr>
    </tbody>
  </table>

  <pre><code>PHARMACOLOGY QUESTION
        ↓
SELECT DATA
        ↓
CHOOSE PLOT TYPE
        ↓
   ┌────┴────┐
   R       Python
   └────┬────┘
        ↓
SAME SCIENTIFIC INFORMATION</code></pre>

  <p>
    A bar plot remains a bar plot, a scatter plot remains a scatter plot, and a concentration-time profile remains a concentration-time profile regardless of whether R or Python creates it.
  </p>

  <p>
    Programming syntax changes. The underlying data and scientific interpretation do not.
  </p>

  <h2>Complete beginner scripts</h2>

  <h3>Bar plot</h3>

  <pre><code>data &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)

subjects &lt;- data[!duplicated(data$ID), ]

barplot(
  subjects$WEIGHT,
  names.arg = subjects$ID,
  xlab = "Subject",
  ylab = "Weight",
  main = "Body Weight of Study Subjects"
)</code></pre>

  <h3>Scatter plot</h3>

  <pre><code>data &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)

plot(
  data$TIME,
  data$CONC,
  xlab = "Time (hours)",
  ylab = "Theophylline concentration",
  main = "Concentration versus Time"
)</code></pre>

  <h3>Line plot</h3>

  <pre><code>data &lt;- read.csv(
  "theophylline.csv",
  na.strings = "."
)

subject1 &lt;- data[data$ID == 1, ]
subject1 &lt;- subject1[order(subject1$TIME), ]

plot(
  subject1$TIME,
  subject1$CONC,
  type = "l",
  xlab = "Time (hours)",
  ylab = "Theophylline concentration",
  main = "Concentration-Time Profile: Subject 1"
)</code></pre>

  <h2>Overall workflow</h2>

  <p>
    The complete sequence across the recent articles is now:
  </p>

  <pre><code>theophylline.csv
       ↓
Bash / grep
inspect raw data
       ↓
R data frame / vectors
represent data
       ↓
R / Python control flow
make decisions and repeat operations
       ↓
R / Python visualization
see patterns in data</code></pre>

  <p>
    The key lesson is not that one language is the “correct” plotting language. It is that once the scientific question and variables are clear, both R and Python can express the same visualization task.
  </p>

  <h2>Where we stop</h2>

  <p>
    We have deliberately stayed with base R plotting. This article does not introduce <code>ggplot2</code>, regression lines, statistical tests, pharmacokinetic modelling, advanced graphics parameters, multi-panel figures, or publication-quality customization.
  </p>

  <p>
    At this stage, students should be able to take the same pharmacology CSV, identify the question, choose the appropriate basic plot, select the required vectors, and express that plotting task in either R or Python.
  </p>

  <h2>Further reading</h2>

  <ul>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/utils/html/read.table.html" target="_blank" rel="noopener noreferrer">
        R documentation: read.csv and tabular data import
      </a>
      @rReadCsv
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/barplot.html" target="_blank" rel="noopener noreferrer">
        R documentation: barplot
      </a>
      @rBarplot
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/graphics/html/plot.default.html" target="_blank" rel="noopener noreferrer">
        R documentation: default plot method
      </a>
      @rPlotDefault
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/base/html/duplicated.html" target="_blank" rel="noopener noreferrer">
        R documentation: duplicated
      </a>
      @rDuplicated
    </li>
    <li>
      <a href="https://stat.ethz.ch/R-manual/R-devel/library/base/html/order.html" target="_blank" rel="noopener noreferrer">
        R documentation: order
      </a>
      @rOrder
    </li>
  </ul>
</article>
  `};export{o as default};
