const e="/notes_computers_in_biology/assets/rk-2026-029-fig1-bar--90-zPt-.png",t="/notes_computers_in_biology/assets/rk-2026-029-fig2-scatter-ClV7LksG.png",a="/notes_computers_in_biology/assets/rk-2026-029-fig3-line-CYR4-TEN.png",o={id:"RK-2026-029",title:"Creating Bar, Scatter, and Line Plots in Python with Pharmacology Data",date:"2026-09-29",tags:["#Python","#Matplotlib","#DataVisualization"],type:"report",template:"standard",readTime:"24 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"A beginner workflow for turning the same theophylline CSV used in earlier lessons into three standard Python plots. Students learn how the scientific question determines whether a bar, scatter, or line plot is appropriate, then follow the full sequence from importing pandas and matplotlib through reading, selecting, plotting, labeling, displaying, and interpreting the data.",content:`
<article>
  <h2>Why visualize the dataset?</h2>

  <p>
    We have already inspected individual records in <code>theophylline.csv</code>. We know that the file contains subject identifiers, sampling times, concentration measurements, body weights, and a sex category. Reading individual numbers tells us <em>what was measured</em>, but it is much harder to recognize overall patterns by reading rows one at a time.
  </p>

  <p>
    Visualization changes numerical observations into a visual representation. The first decision is therefore not “Which Python command should I use?” It is:
  </p>

  <p>
    <strong>What question am I trying to answer, and what kind of variables am I comparing?</strong>
  </p>

  <pre><code>Compare categories
       ↓
      BAR

Relationship between two numeric variables
       ↓
    SCATTER

Change across an ordered variable such as time
       ↓
      LINE</code></pre>

  <p>
    These distinctions are more important than memorizing plotting commands. Python provides the instructions for constructing a plot, but the scientific question determines which plot is appropriate.
  </p>

  <p>
    The numerical values used here correspond to the standard theophylline pharmacokinetic dataset documented by R, where body weight is reported in kilograms, sampling time in hours, and theophylline concentration in milligrams per litre. @rTheophData
  </p>

  <h2>Part A — The Python plotting workflow</h2>

  <h3>1. Import the tools</h3>

  <p>
    Python provides the programming language. Additional libraries provide convenient tools for working with tabular data and creating plots.
  </p>

  <pre><code>import pandas as pd
import matplotlib.pyplot as plt</code></pre>

  <p>
    In this article:
  </p>

  <ul>
    <li><code>pandas</code> helps us read and work with the CSV table;</li>
    <li><code>matplotlib.pyplot</code> provides the plotting functions;</li>
    <li><code>pd</code> and <code>plt</code> are short aliases conventionally used for these libraries.</li>
  </ul>

  <p>
    The libraries must already be available in the Python environment. Package installation is outside the scope of this plotting lesson.
  </p>

  <h3>2. Read the same dataset</h3>

  <pre><code>data = pd.read_csv(
    "theophylline.csv",
    na_values="."
)</code></pre>

  <p>
    <code>pd.read_csv()</code> reads a comma-separated file into a pandas data frame. The <code>na_values</code> argument allows additional strings to be recognized as missing values, so the dot used in this teaching CSV is interpreted as missing data rather than as an ordinary character. @pandasReadCsv
  </p>

  <p>
    Check the beginning of the imported table:
  </p>

  <pre><code>print(data.head())</code></pre>

  <p>
    At this point the workflow is:
  </p>

  <pre><code>theophylline.csv
       ↓
pd.read_csv()
       ↓
data
       ↓
choose columns
       ↓
plot</code></pre>

  <p>
    We will not repeat the full data-frame lesson here. The important point is that <code>data</code> now gives Python access to the columns we want to visualize.
  </p>

  <h2>Part B — Bar plot: compare categories</h2>

  <h3>3. Question: how do body weights compare across subjects?</h3>

  <p>
    A bar plot is useful when we want to compare a numerical value across discrete categories.
  </p>

  <p>
    For this question:
  </p>

  <ul>
    <li><strong>category:</strong> subject ID;</li>
    <li><strong>numerical value:</strong> body weight.</li>
  </ul>

  <p>
    Each subject appears repeatedly because the dataset contains several concentration measurements per subject. The weight value is therefore repeated across that subject's rows. For this plot we only need one row per subject:
  </p>

  <pre><code>subjects = data.drop_duplicates("ID")</code></pre>

  <p>
    <code>drop_duplicates("ID")</code> keeps one row for each unique subject ID. We are using it only as a supporting preparation step for this graph, not as a new pandas topic. @pandasDropDuplicates
  </p>

  <h3>4. Create the bar plot</h3>

  <pre><code>plt.bar(subjects["ID"], subjects["WEIGHT"])</code></pre>

  <p>
    The basic structure is:
  </p>

  <pre><code>plt.bar(x, y)</code></pre>

  <p>
    In our graph:
  </p>

  <ul>
    <li><code>x</code> contains the subject categories;</li>
    <li><code>y</code> contains the corresponding body weights.</li>
  </ul>

  <p>
    Matplotlib's bar function positions bars according to the supplied x values and uses the supplied heights for the bars. @matplotlibBar
  </p>

  <h3>5. Label and display the plot</h3>

  <pre><code>plt.bar(subjects["ID"], subjects["WEIGHT"])
plt.xlabel("Subject")
plt.ylabel("Weight (kg)")
plt.title("Body Weight of Study Subjects")
plt.show()</code></pre>

  <p>
    Read the workflow in order:
  </p>

  <pre><code>create plot
    ↓
label x-axis
    ↓
label y-axis
    ↓
add title
    ↓
show plot</code></pre>

  <p>
    <code>plt.xlabel()</code>, <code>plt.ylabel()</code>, and <code>plt.title()</code> describe the figure, while <code>plt.show()</code> displays the open figure. @matplotlibLabels; @matplotlibShow
  </p>

  <figure class="science-figure" data-id="FIG-1" data-clean-src="${e}">
    <img
      src="${e}"
      alt="Bar plot with subject IDs on the horizontal axis and body weight in kilograms on the vertical axis, showing one bar for each of the twelve study subjects."
    />
    <figcaption>
      Figure 1: Bar plot comparing body weight across subjects. Each subject contributes one bar because repeated rows were reduced to one weight record per subject before plotting.
    </figcaption>
  </figure>

  <p>
    The purpose of the graph is comparison across categories. The height of each bar represents the recorded weight for one subject.
  </p>

  <h2>Part C — Scatter plot: relate two numerical variables</h2>

  <h3>6. Question: how are sampling time and concentration distributed together?</h3>

  <p>
    Now the question changes. We are no longer comparing one value across subject categories. We have two numerical variables:
  </p>

  <ul>
    <li><code>TIME</code>;</li>
    <li><code>CONC</code>.</li>
  </ul>

  <p>
    A scatter plot represents paired numerical values as points.
  </p>

  <pre><code>one observation

TIME ─────┐
          ├── one point
CONC ─────┘</code></pre>

  <h3>7. Create, label, and display the scatter plot</h3>

  <pre><code>plt.scatter(data["TIME"], data["CONC"])
plt.xlabel("Time (hours)")
plt.ylabel("Theophylline concentration (mg/L)")
plt.title("Concentration versus Time")
plt.show()</code></pre>

  <p>
    The basic structure is:
  </p>

  <pre><code>plt.scatter(x, y)</code></pre>

  <p>
    Here:
  </p>

  <ul>
    <li><code>x = TIME</code>;</li>
    <li><code>y = CONC</code>.</li>
  </ul>

  <p>
    Matplotlib describes a scatter plot as plotting y versus x using individual data positions. @matplotlibScatter
  </p>

  <figure class="science-figure" data-id="FIG-2" data-clean-src="${t}">
    <img
      src="${t}"
      alt="Scatter plot of sampling time in hours against theophylline concentration in milligrams per litre, showing observations from all study subjects together."
    />
    <figcaption>
      Figure 2: Scatter plot of all available time-concentration observations. Each point represents one recorded concentration at one sampling time; observations from all subjects are shown together.
    </figcaption>
  </figure>

  <h3>What does this scatter plot show?</h3>

  <p>
    The scatter plot lets us see how two numerical variables are distributed together. Many subjects were sampled at similar time ranges, so multiple observations appear around similar x-axis positions.
  </p>

  <p>
    We should not overinterpret this graph as a single concentration-time profile. The points come from multiple subjects, and the plot does not connect which points belong to the same person.
  </p>

  <p>
    That limitation creates the reason for our third plot.
  </p>

  <h2>Part D — Line plot: follow one subject across time</h2>

  <h3>8. Question: how does Subject 1 concentration change through time?</h3>

  <p>
    Sampling time has a meaningful order:
  </p>

  <pre><code>0 h → 0.25 h → 0.57 h → 1.12 h → ... → later times</code></pre>

  <p>
    A line plot can connect sequential observations and emphasize progression across that ordered variable.
  </p>

  <p>
    First select Subject 1:
  </p>

  <pre><code>subject1 = data[data["ID"] == 1]</code></pre>

  <p>
    Then make sure the records are ordered by sampling time:
  </p>

  <pre><code>subject1 = subject1.sort_values("TIME")</code></pre>

  <p>
    Filtering and sorting are supporting operations here. The plotting concept remains the focus.
  </p>

  <h3>9. Create the concentration-time line plot</h3>

  <pre><code>plt.plot(subject1["TIME"], subject1["CONC"])
plt.xlabel("Time (hours)")
plt.ylabel("Theophylline concentration (mg/L)")
plt.title("Concentration-Time Profile: Subject 1")
plt.show()</code></pre>

  <p>
    The basic structure is:
  </p>

  <pre><code>plt.plot(x, y)</code></pre>

  <p>
    In this case:
  </p>

  <ul>
    <li><code>x = ordered TIME</code>;</li>
    <li><code>y = CONC</code>.</li>
  </ul>

  <p>
    Matplotlib's <code>plot()</code> function plots y versus x using lines and/or markers. With the default call used here, the observations are connected as a line. @matplotlibPlot
  </p>

  <figure class="science-figure" data-id="FIG-3" data-clean-src="${a}">
    <img
      src="${a}"
      alt="Line plot for Subject 1 showing theophylline concentration in milligrams per litre across ordered sampling times in hours."
    />
    <figcaption>
      Figure 3: Concentration-time line plot for Subject 1. Connecting successive observations emphasizes how the recorded concentration changes across ordered sampling times. The baseline concentration is missing in the teaching CSV, so no concentration point is available at time zero.
    </figcaption>
  </figure>

  <p>
    Unlike the scatter plot of all subjects, this graph follows one subject through ordered time. Connecting the measurements therefore has a clear sequential meaning.
  </p>

  <h2>Part E — Compare the three plots</h2>

  <table class="science-table" data-id="rk-2026-029-plot-comparison">
    <caption>Table 1: Choosing a plot from the scientific question and data structure.</caption>
    <thead>
      <tr>
        <th scope="col">Plot</th>
        <th scope="col">Main question</th>
        <th scope="col">Example from this dataset</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bar</td>
        <td>How do categories compare?</td>
        <td>Body weight across subjects.</td>
      </tr>
      <tr>
        <td>Scatter</td>
        <td>How are two numerical variables distributed or related?</td>
        <td>Sampling time versus theophylline concentration across all observations.</td>
      </tr>
      <tr>
        <td>Line</td>
        <td>How does a value change across an ordered variable?</td>
        <td>Theophylline concentration through time for Subject 1.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Plot choice should come from the <strong>question and data structure</strong>, not simply from which graph looks attractive.
  </p>

  <h2>Part F — The common Python plotting pattern</h2>

  <p>
    The three plot types look different, but the Python workflow is almost identical.
  </p>

  <pre><code>plt.bar(x, y)</code></pre>

  <p>or:</p>

  <pre><code>plt.scatter(x, y)</code></pre>

  <p>or:</p>

  <pre><code>plt.plot(x, y)</code></pre>

  <p>
    Then:
  </p>

  <pre><code>plt.xlabel(...)
plt.ylabel(...)
plt.title(...)
plt.show()</code></pre>

  <p>
    This produces a reusable mental model:
  </p>

  <pre><code>IMPORT
   ↓
READ DATA
   ↓
SELECT VARIABLES
   ↓
CHOOSE PLOT
   ↓
CREATE PLOT
   ↓
LABEL
   ↓
DISPLAY
   ↓
INTERPRET</code></pre>

  <h2>Complete beginner scripts</h2>

  <p>
    The following examples show the complete workflow for each question. They deliberately avoid styling, themes, subplots, legends, and advanced pandas operations.
  </p>

  <h3>Bar plot</h3>

  <pre><code>import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv(
    "theophylline.csv",
    na_values="."
)

subjects = data.drop_duplicates("ID")

plt.bar(subjects["ID"], subjects["WEIGHT"])
plt.xlabel("Subject")
plt.ylabel("Weight (kg)")
plt.title("Body Weight of Study Subjects")
plt.show()</code></pre>

  <h3>Scatter plot</h3>

  <pre><code>import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv(
    "theophylline.csv",
    na_values="."
)

plt.scatter(data["TIME"], data["CONC"])
plt.xlabel("Time (hours)")
plt.ylabel("Theophylline concentration (mg/L)")
plt.title("Concentration versus Time")
plt.show()</code></pre>

  <h3>Line plot</h3>

  <pre><code>import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv(
    "theophylline.csv",
    na_values="."
)

subject1 = data[data["ID"] == 1]
subject1 = subject1.sort_values("TIME")

plt.plot(subject1["TIME"], subject1["CONC"])
plt.xlabel("Time (hours)")
plt.ylabel("Theophylline concentration (mg/L)")
plt.title("Concentration-Time Profile: Subject 1")
plt.show()</code></pre>

  <h2>Scientific choice comes before Python syntax</h2>

  <p>
    Python does not decide which graph is scientifically appropriate. The question and the structure of the variables determine that choice.
  </p>

  <pre><code>Question
   ↓
Choose variables
   ↓
Choose visual representation
   ↓
Python syntax</code></pre>

  <p>
    If the question is about comparing categories, a bar plot may be appropriate. If the question concerns two numerical variables, a scatter plot may be useful. If the question concerns change across an ordered variable such as time, a line plot may communicate that progression clearly.
  </p>

  <h2>What should you remember?</h2>

  <ol>
    <li>Begin with a scientific or data question, not with a plotting command.</li>
    <li>Use pandas to read the CSV and prepare the required rows or columns.</li>
    <li>A bar plot compares a numerical value across categories.</li>
    <li>A scatter plot represents paired numerical observations as points.</li>
    <li>A line plot emphasizes change across an ordered variable.</li>
    <li>Axis labels and a title tell the reader what the visualized values mean.</li>
    <li><code>plt.show()</code> displays the constructed figure.</li>
    <li>The same basic workflow applies to all three plot types.</li>
  </ol>

  <h2>Bridge to the next article</h2>

  <p>
    We have now created bar, scatter, and line plots in Python using the same pharmacology dataset.
  </p>

  <p>
    <strong>Can the same data and the same three visualization questions be expressed in R?</strong>
  </p>

  <p>
    The next article will answer that question while keeping the scientific interpretation of bar, scatter, and line plots unchanged.
  </p>

  <h2>Further reading</h2>

  <ul>
    <li>
      <a href="https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html" target="_blank" rel="noopener noreferrer">
        pandas documentation: read_csv
      </a>
      @pandasReadCsv
    </li>
    <li>
      <a href="https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html" target="_blank" rel="noopener noreferrer">
        pandas documentation: DataFrame.drop_duplicates
      </a>
      @pandasDropDuplicates
    </li>
    <li>
      <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.bar.html" target="_blank" rel="noopener noreferrer">
        Matplotlib documentation: bar
      </a>
      @matplotlibBar
    </li>
    <li>
      <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html" target="_blank" rel="noopener noreferrer">
        Matplotlib documentation: scatter
      </a>
      @matplotlibScatter
    </li>
    <li>
      <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html" target="_blank" rel="noopener noreferrer">
        Matplotlib documentation: plot
      </a>
      @matplotlibPlot
    </li>
    <li>
      <a href="https://stat.ethz.ch/CRAN/doc/manuals/r-patched/packages/datasets/refman/datasets.html" target="_blank" rel="noopener noreferrer">
        R datasets documentation: Pharmacokinetics of Theophylline
      </a>
      @rTheophData
    </li>
  </ul>
</article>
  `};export{o as default};
