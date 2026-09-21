const e={id:"RK-2026-025",title:"Basic Biostatistics in Microsoft Excel: Mean, Standard Deviation, Cell References, and Plots",date:"2026-09-21",tags:["#Biostatistics","#MicrosoftExcel","#DescriptiveStatistics","#DataVisualization"],type:"report",template:"standard",readTime:"24 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"A beginner-friendly introduction to organizing numerical biological data in Microsoft Excel and summarizing it with the mean and standard deviation. The article also explains relative and absolute cell references and shows when to use bar, scatter, and line plots without turning the lesson into a software tutorial.",content:`
<article>
  <h2>From measurements to a useful summary</h2>

  <p>
    Biological experiments often produce several measurements rather than one value. A culture experiment may give several colony diameters, an enzyme assay may contain several activity measurements, and a growth experiment may record optical density at several time points. Looking at every number is important, but we also need simple ways to summarize and visualize the data.
  </p>

  <p>
    This article introduces four basic skills: understanding the idea of central tendency, calculating the mean and standard deviation, using cell references correctly in Microsoft Excel, and choosing a suitable basic plot. The aim is not to learn every statistical function in Excel. The aim is to understand what the numbers and graphs mean biologically.
  </p>

  <h2>1. Central tendency: where is the center of the data?</h2>

  <p>
    <strong>Central tendency</strong> describes the central or typical value of a dataset. The three common measures are the mean, median, and mode. They answer similar questions, but they do not describe the data in exactly the same way.
  </p>

  <table class="science-table" data-id="central-tendency-summary">
    <caption>Table 1: Three common measures of central tendency and their basic interpretation.</caption>
    <thead>
      <tr>
        <th scope="col">Measure</th>
        <th scope="col">Basic idea</th>
        <th scope="col">Useful when</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mean</td>
        <td>Add all values and divide by the number of observations.</td>
        <td>Numerical measurements are reasonably representative of one group and a numerical average is meaningful.</td>
      </tr>
      <tr>
        <td>Median</td>
        <td>The middle value after observations are arranged in order.</td>
        <td>The distribution is strongly skewed or contains extreme values that would pull the mean away from most observations.</td>
      </tr>
      <tr>
        <td>Mode</td>
        <td>The most frequently occurring value or category.</td>
        <td>The most common category or repeated value is biologically meaningful.</td>
      </tr>
    </tbody>
  </table>

  <p>
    In many laboratory exercises, the <strong>mean</strong> is the first summary we calculate because measurements such as diameter, mass, concentration, absorbance, or time are numerical. However, the mean should not be interpreted alone. A dataset can have a clear average and still contain measurements that are tightly clustered or widely scattered.
  </p>

  <h3>The arithmetic mean</h3>

  <p>
    If the observations are represented by <em>x</em> and the number of observations is <em>n</em>, the arithmetic mean is:
  </p>

  $$
  \\bar{x}=\\frac{\\sum_{i=1}^{n}x_i}{n}
  $$

  <p>
    In words: add the observations and divide by how many observations were measured. The sigma symbol, Σ, simply means that the values are being added together.
  </p>

  <h2>2. A biological example: colony diameter</h2>

  <p>
    Consider ten <em>Escherichia coli</em> colonies whose diameters were measured after 24 hours. The values below are the same classroom dataset used to introduce the mean.
  </p>

  <table class="science-table" data-id="ecoli-colony-diameter-data">
    <caption>Table 2: Diameter of ten <em>Escherichia coli</em> colonies after 24 hours.</caption>
    <thead>
      <tr>
        <th scope="col">Colony ID</th>
        <th scope="col">Diameter (mm)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>E1</td><td>5.0</td></tr>
      <tr><td>E2</td><td>6.0</td></tr>
      <tr><td>E3</td><td>5.5</td></tr>
      <tr><td>E4</td><td>6.3</td></tr>
      <tr><td>E5</td><td>5.7</td></tr>
      <tr><td>E6</td><td>6.1</td></tr>
      <tr><td>E7</td><td>6.0</td></tr>
      <tr><td>E8</td><td>5.8</td></tr>
      <tr><td>E9</td><td>6.2</td></tr>
      <tr><td>E10</td><td>5.9</td></tr>
    </tbody>
  </table>

  <p>
    If the colony IDs are entered in cells <code>A2:A11</code> and the diameters are entered in <code>B2:B11</code>, Excel can calculate the mean with:
  </p>

  <pre><code>=AVERAGE(B2:B11)</code></pre>

  <p>
    The result is <strong>5.85 mm</strong>. This gives one value representing the center of the ten measurements.
  </p>

  <h3>Mean does not describe spread</h3>

  <p>
    Suppose two experiments have the same mean. Their individual measurements could still behave very differently. One set might stay close to the mean, while the other might contain measurements far above and below it. Therefore, a summary of the center should usually be accompanied by a summary of the <strong>variability</strong> or <strong>dispersion</strong>.
  </p>

  <h2>3. Standard deviation: how spread out are the measurements?</h2>

  <p>
    <strong>Standard deviation</strong> describes how much the observations vary around the mean. A small standard deviation means the observations are relatively close to the mean. A larger standard deviation means the observations are more spread out.
  </p>

  <p>
    For a sample, the standard deviation is commonly written as <em>s</em>:
  </p>

  $$
  s=\\sqrt{\\frac{\\sum_{i=1}^{n}(x_i-\\bar{x})^2}{n-1}}
  $$

  <p>
    The important biological interpretation is more useful than memorizing every algebraic step. Each observation is compared with the mean, those differences are summarized, and the final square root returns the result to the same unit as the original measurements. If colony diameter is measured in millimetres, its standard deviation is also expressed in millimetres.
  </p>

  <h3>Calculating sample standard deviation in Excel</h3>

  <p>
    For the colony-diameter values in <code>B2:B11</code>, use:
  </p>

  <pre><code>=STDEV.S(B2:B11)</code></pre>

  <p>
    The sample standard deviation is approximately <strong>0.381 mm</strong>. The result can therefore be summarized as:
  </p>

  <p>
    <strong>Mean colony diameter = 5.85 mm; SD = 0.38 mm; n = 10.</strong>
  </p>

  <p>
    For most classroom experiments, replicate measurements are treated as a sample from a larger biological process, so <code>STDEV.S</code> is usually the appropriate Excel function. <code>STDEV.P</code> is intended for situations in which the entered values represent the complete population of interest rather than a sample.
  </p>

  <h3>What standard deviation does not tell us</h3>

  <p>
    Standard deviation is not a test of whether two groups are significantly different, and a smaller standard deviation does not automatically mean that an experiment is better. It only describes spread around the mean. Biological interpretation still depends on experimental design, sample size, measurement quality, and the question being asked.
  </p>

  <h2>4. Relative and absolute cell references in Excel</h2>

  <p>
    Excel formulas often contain cell addresses such as <code>B2</code> or <code>E1</code>. These addresses tell Excel where to obtain a value. The way an address behaves when the formula is copied is called its <strong>reference type</strong>.
  </p>

  <table class="science-table" data-id="excel-cell-reference-types">
    <caption>Table 3: Basic Excel cell-reference types.</caption>
    <thead>
      <tr>
        <th scope="col">Reference</th>
        <th scope="col">Type</th>
        <th scope="col">What happens when copied?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>B2</code></td>
        <td>Relative</td>
        <td>Both row and column can change according to the new formula position.</td>
      </tr>
      <tr>
        <td><code>$B$2</code></td>
        <td>Absolute</td>
        <td>The reference stays fixed on cell B2.</td>
      </tr>
      <tr>
        <td><code>$B2</code></td>
        <td>Mixed</td>
        <td>Column B stays fixed, while the row can change.</td>
      </tr>
      <tr>
        <td><code>B$2</code></td>
        <td>Mixed</td>
        <td>Row 2 stays fixed, while the column can change.</td>
      </tr>
    </tbody>
  </table>

  <h3>Why absolute references are useful</h3>

  <p>
    Imagine that several optical-density readings were obtained after every sample had been diluted by the same factor. If the measured OD is in column B and the dilution factor is stored once in cell <code>E1</code>, the corrected value in row 2 could be calculated with:
  </p>

  <pre><code>=B2*$E$1</code></pre>

  <p>
    When this formula is copied downward, <code>B2</code> becomes <code>B3</code>, <code>B4</code>, and so on because it is a relative reference. In contrast, <code>$E$1</code> remains fixed because the same dilution factor is used for every row.
  </p>

  <p>
    This is the main idea behind absolute referencing: <strong>lock a cell when every copied formula must continue to use the same value.</strong> In desktop Excel, selecting a reference inside a formula and pressing <code>F4</code> cycles through relative, absolute, and mixed reference forms.
  </p>

  <h2>5. Choosing the right basic plot</h2>

  <p>
    A graph should match the structure of the biological question. Bar, scatter, and line plots are not interchangeable. Choosing the plot first and forcing the data into it can hide the real structure of the experiment.
  </p>

  <table class="science-table" data-id="basic-plot-selection">
    <caption>Table 4: When to use three common plot types in introductory biological data analysis.</caption>
    <thead>
      <tr>
        <th scope="col">Plot</th>
        <th scope="col">Best suited to</th>
        <th scope="col">Typical biological example</th>
        <th scope="col">Key interpretation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bar or column</td>
        <td>Comparing values among discrete categories or groups.</td>
        <td>Mean colony diameter of different bacterial species or mean activity under different treatments.</td>
        <td>Compare the magnitude of one summary value among categories.</td>
      </tr>
      <tr>
        <td>Scatter</td>
        <td>Examining the relationship between two numerical variables measured as pairs.</td>
        <td>Substrate concentration versus reaction rate.</td>
        <td>Look for direction, clustering, non-linearity, and unusual observations. Association does not by itself prove causation.</td>
      </tr>
      <tr>
        <td>Line</td>
        <td>Showing change across an ordered variable, especially time.</td>
        <td>Optical density measured during bacterial growth at successive time points.</td>
        <td>Follow a progression or trend where the order of the x-axis values matters.</td>
      </tr>
    </tbody>
  </table>

  <h3>Bar or column chart: comparing groups</h3>

  <p>
    A bar or column chart is useful when the x-axis contains categories rather than a continuous numerical scale. In Excel, a <strong>Column</strong> chart uses vertical bars and a <strong>Bar</strong> chart uses horizontal bars.
  </p>

  <p>
    A simple workflow is:
  </p>

  <ol>
    <li>Place the category names in one column and the corresponding summary values, such as means, in the next column.</li>
    <li>Select the table.</li>
    <li>Open <strong>Insert</strong> and choose a Column or Bar chart.</li>
    <li>Add an informative chart title and label the measurement axis with its unit.</li>
  </ol>

  <p>
    If a bar represents a mean calculated from replicates, keep the original replicate data in the workbook. The height of the bar alone does not show the variability among those measurements. When appropriate, the standard deviation can later be added as error bars.
  </p>

  <h3>Scatter plot: two numerical variables</h3>

  <p>
    A scatter plot should be used when every observation contains an <em>x</em> value and a corresponding <em>y</em> value. Both axes are numerical. This makes scatter plots especially useful for concentration-response measurements, calibration data, and other paired numerical observations.
  </p>

  <ol>
    <li>Place the x variable in one column and its corresponding y variable in the adjacent column.</li>
    <li>Select both columns.</li>
    <li>Choose <strong>Insert → Scatter (X, Y)</strong>.</li>
    <li>Label both axes with the variable name and unit.</li>
  </ol>

  <p>
    Do not interpret a visible relationship as proof that one variable causes the other. A scatter plot shows the pattern present in the observations; biological causation requires appropriate experimental evidence.
  </p>

  <h3>Line plot: ordered change</h3>

  <p>
    A line plot connects observations in sequence. It is therefore most appropriate when the order itself is meaningful, such as measurements made at 0, 2, 4, 6, and 8 hours.
  </p>

  <ol>
    <li>Place the ordered variable, such as time, in the first column.</li>
    <li>Place the measured response in the next column.</li>
    <li>Select the data.</li>
    <li>Choose <strong>Insert → Line</strong> and select a simple line style, preferably with markers when individual observations should remain visible.</li>
  </ol>

  <p>
    Avoid connecting unrelated categories with a line. A line visually suggests progression between neighbouring points, so it should be reserved for data where that progression is meaningful.
  </p>

  <h2>6. A compact Excel workflow for laboratory data</h2>

  <p>
    For a small biological dataset, the following sequence is usually sufficient:
  </p>

  <ol>
    <li><strong>Enter raw data clearly.</strong> Use one row per observation and give every column a descriptive heading with units where relevant.</li>
    <li><strong>Keep raw measurements unchanged.</strong> Perform calculations in separate columns or summary cells rather than replacing the original observations.</li>
    <li><strong>Calculate the mean.</strong> Use <code>=AVERAGE(range)</code>.</li>
    <li><strong>Calculate sample standard deviation.</strong> Use <code>=STDEV.S(range)</code> for ordinary experimental replicate data.</li>
    <li><strong>Use absolute references for shared constants.</strong> For example, use <code>$E$1</code> when all rows must use the same value stored in E1.</li>
    <li><strong>Choose a graph based on the question.</strong> Use bar/column for categorical comparison, scatter for paired numerical variables, and line for ordered progression such as time.</li>
    <li><strong>Label the graph.</strong> Axes should state what was measured and, where applicable, the unit.</li>
    <li><strong>Interpret biology, not just software output.</strong> Ask what the center, spread, and graphical pattern mean for the experiment.</li>
  </ol>

  <h2>7. Common beginner mistakes</h2>

  <ul>
    <li><strong>Reporting only a mean:</strong> the mean describes the center but not the spread of replicate measurements.</li>
    <li><strong>Using <code>STDEV.P</code> automatically:</strong> laboratory replicates are commonly treated as a sample, for which <code>STDEV.S</code> is generally appropriate.</li>
    <li><strong>Copying a formula without checking references:</strong> a constant cell can move unexpectedly unless it is locked with an absolute reference.</li>
    <li><strong>Using a line plot for unrelated categories:</strong> a connecting line implies an ordered progression.</li>
    <li><strong>Using a scatter plot when the x-axis is categorical:</strong> scatter plots require numerical x and y coordinates.</li>
    <li><strong>Leaving axes without units:</strong> a graph labelled only "Value" is difficult to interpret scientifically.</li>
    <li><strong>Treating a graph as proof:</strong> a visual pattern is evidence to interpret, not by itself proof of a mechanism or causal relationship.</li>
  </ul>

  <h2>8. What students should be able to do after this exercise</h2>

  <p>
    After working through these ideas in Excel, a student should be able to enter a small numerical dataset, calculate its mean and sample standard deviation, explain what those two values represent, identify when an absolute reference is required, and choose a sensible bar, scatter, or line plot for a biological question.
  </p>

  <p>
    The central lesson is simple: <strong>the mean tells us where the data are centered, standard deviation tells us how much the observations vary around that center, cell references make repeated calculations reliable, and plots make the structure of the data easier to see.</strong>
  </p>

  <h2>Further reading</h2>

  <ul>
    <li><a href="https://support.microsoft.com/en-us/excel/functions/average-function" target="_blank" rel="noopener noreferrer">Microsoft Support: AVERAGE function</a></li>
    <li><a href="https://support.microsoft.com/en-us/excel/functions/stdev-s-function" target="_blank" rel="noopener noreferrer">Microsoft Support: STDEV.S function</a></li>
    <li><a href="https://support.microsoft.com/en-us/excel/switch-between-relative-absolute-and-mixed-references" target="_blank" rel="noopener noreferrer">Microsoft Support: Relative, absolute, and mixed references</a></li>
    <li><a href="https://support.microsoft.com/en-us/excel/get-started/create-a-chart-from-start-to-finish" target="_blank" rel="noopener noreferrer">Microsoft Support: Create a chart from start to finish</a></li>
  </ul>
</article>
  `};export{e as default};
