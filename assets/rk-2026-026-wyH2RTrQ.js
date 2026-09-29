const e={id:"RK-2026-026",title:"Basic grep for Pharmacology Data: Inspecting Repeated Drug-Concentration Records",date:"2026-09-29",tags:["#grep","#Bash","#PharmacologyData"],type:"report",template:"standard",readTime:"20 min",author:{name:"RK Patel",role:"Microbiologist",avatar:"https://github.com/RKPatel-1996.png",affiliation:"Gujarat University"},excerpt:"A beginner-level introduction to grep using a repeated-measures pharmacology dataset with subject ID, dose/amount, sampling time, concentration, body weight, and sex. Students learn to inspect the raw CSV, retrieve one subject, use beginning and end anchors, locate and count records, exclude a subject, and perform a simple case-insensitive search before moving toward structured analysis in R.",content:`
<article>
  <h2>Start with the dataset as a text file</h2>

  <p>
    Pharmacology datasets are often opened directly in Excel, R, or another statistical program. Before that happens, however, a CSV dataset is still simply a text file: characters are stored in rows, commas separate fields, and each line can be inspected from the terminal.
  </p>

  <p>
    In this article we will work with <code>theophylline.csv</code>. The file contains repeated records from 12 subjects. Each subject has a row at time 0 followed by several later sampling times.
  </p>

  <pre><code>ID,AMT,TIME,CONC,WEIGHT,SEX
1,4.02,0,.,79.6,M
1,.,0.25,2.84,79.6,M
1,.,0.57,6.57,79.6,M
1,.,1.12,10.5,79.6,M
1,.,2.02,9.66,79.6,M
1,.,3.82,8.58,79.6,M
1,.,5.1,8.36,79.6,M
1,.,7.03,7.47,79.6,M
1,.,9.05,6.89,79.6,M
1,.,12.12,5.94,79.6,M
1,.,24.37,3.28,79.6,M
2,4.4,0,.,72.4,M
2,.,0.27,1.72,72.4,M
...</code></pre>

  <p>
    Before learning any command, read the structure. Each line after the header is one record. The same <code>ID</code> appears repeatedly because each subject contributes multiple time points.
  </p>

  <table class="science-table" data-id="rk-2026-026-dataset-columns">
    <caption>Table 1: Meaning of the columns used in the teaching dataset.</caption>
    <thead>
      <tr>
        <th scope="col">Column</th>
        <th scope="col">Meaning in this file</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ID</code></td>
        <td>Subject identifier.</td>
      </tr>
      <tr>
        <td><code>AMT</code></td>
        <td>Amount/dose value recorded for the subject. Later observation rows contain <code>.</code> rather than another amount value.</td>
      </tr>
      <tr>
        <td><code>TIME</code></td>
        <td>Sampling time.</td>
      </tr>
      <tr>
        <td><code>CONC</code></td>
        <td>Observed drug-concentration value. The time-zero rows contain <code>.</code>.</td>
      </tr>
      <tr>
        <td><code>WEIGHT</code></td>
        <td>Body-weight value recorded for that subject.</td>
      </tr>
      <tr>
        <td><code>SEX</code></td>
        <td>Sex category recorded as <code>M</code> or <code>F</code>.</td>
      </tr>
    </tbody>
  </table>

  <p>
    The dataset itself does not state units in the column names, so we should not invent them. For this lesson, the important point is the structure of the records rather than pharmacokinetic interpretation.
  </p>

  <p>
    Our central idea is:
    <strong>a dataset can begin as ordinary text in a file, and the terminal can already help us inspect and filter that text before statistical analysis.</strong>
  </p>

  <h2>1. See the file before searching it</h2>

  <p>
    Start by printing the file:
  </p>

  <pre><code>cat theophylline.csv</code></pre>

  <p>
    This file is long enough that the terminal will scroll. To inspect only the beginning, use:
  </p>

  <pre><code>head theophylline.csv</code></pre>

  <p>
    The default output shows the first few records. If you specifically want the header plus all 11 rows belonging to Subject 1, you can ask for 12 lines:
  </p>

  <pre><code>head -n 12 theophylline.csv</code></pre>

  <p>
    We will not spend much time on <code>cat</code> or <code>head</code>. Their role here is simply to establish what the file physically contains.
  </p>

  <h2>2. First grep: search for ordinary text</h2>

  <p>
    <code>grep</code> searches a text file line by line for a specified pattern and prints matching lines. The general form is:
  </p>

  <pre><code>grep "pattern" filename</code></pre>

  <p>
    The official GNU grep manual describes the program in terms of matching patterns against input lines and printing the lines that contain matches. @gnuGrepManual
  </p>

  <p>
    Start with a value that we can see directly in the file. Subject 1 has a recorded weight value of <code>79.6</code>:
  </p>

  <pre><code>grep "79.6" theophylline.csv</code></pre>

  <p>
    The command prints every line containing the text <code>79.6</code>. Because that weight value is repeated in each record for Subject 1, the output contains the Subject 1 records.
  </p>

  <p>
    For now, remember only this relationship:
  </p>

  <p><strong>pattern → matching lines</strong></p>

  <p>
    <code>grep</code> does not yet know that <code>79.6</code> represents weight. It only sees characters that match the pattern.
  </p>

  <h2>3. Retrieve all records belonging to Subject 1</h2>

  <p>
    Now ask a direct data question:
  </p>

  <p><strong>Can we retrieve every record belonging to Subject 1?</strong></p>

  <p>
    We might try:
  </p>

  <pre><code>grep "1" theophylline.csv</code></pre>

  <p>
    This is a poor search. The character <code>1</code> appears in many places: Subject 1, Subjects 10, 11, and 12, times such as <code>1.12</code>, and concentration values such as <code>10.5</code>. A plain search for <code>1</code> therefore mixes several unrelated records.
  </p>

  <p>
    We know something important about the CSV structure: <code>ID</code> is the first field. We can use that knowledge:
  </p>

  <pre><code>grep "^1," theophylline.csv</code></pre>

  <p>
    This prints only Subject 1:
  </p>

  <pre><code>1,4.02,0,.,79.6,M
1,.,0.25,2.84,79.6,M
1,.,0.57,6.57,79.6,M
1,.,1.12,10.5,79.6,M
1,.,2.02,9.66,79.6,M
1,.,3.82,8.58,79.6,M
1,.,5.1,8.36,79.6,M
1,.,7.03,7.47,79.6,M
1,.,9.05,6.89,79.6,M
1,.,12.12,5.94,79.6,M
1,.,24.37,3.28,79.6,M</code></pre>

  <p>
    Here <code>^</code> means <strong>the beginning of a line</strong>. Therefore:
  </p>

  <p>
    <code>^1,</code> means approximately <strong>a line that begins with <code>1,</code></strong>.
  </p>

  <p>
    The comma is useful because it marks the end of the first CSV field. This prevents Subject 10, 11, or 12 from being mistaken for Subject 1.
  </p>

  <h2>4. Beginning and end anchors</h2>

  <p>
    We only need two regular-expression symbols at this stage:
  </p>

  <ul>
    <li><code>^</code> = beginning of a line</li>
    <li><code>$</code> = end of a line</li>
  </ul>

  <p>
    GNU grep describes these as anchors because they specify where in a line a match must occur. @gnuGrepManual
  </p>

  <p>
    We have already used <code>^</code> to target the first field. The final field in this dataset is <code>SEX</code>, so it gives us a natural example for <code>$</code>.
  </p>

  <p>
    To print lines ending in <code>,F</code>:
  </p>

  <pre><code>grep ",F$" theophylline.csv</code></pre>

  <p>
    The pattern means: find lines where <code>,F</code> occurs at the <strong>end</strong> of the line. In this dataset, those are records whose final field is <code>F</code>.
  </p>

  <p>
    At this level, the important lesson is not advanced regular expressions. It is that a pattern can describe both <strong>what</strong> text should match and <strong>where</strong> it should occur.
  </p>

  <h2>5. Locate Subject 1 records with line numbers</h2>

  <p>
    Our Subject 1 pattern is still:
  </p>

  <pre><code>^1,</code></pre>

  <p>
    Now ask:
  </p>

  <p><strong>Where in the file are these records?</strong></p>

  <pre><code>grep -n "^1," theophylline.csv</code></pre>

  <p>
    The beginning of the output is:
  </p>

  <pre><code>2:1,4.02,0,.,79.6,M
3:1,.,0.25,2.84,79.6,M
4:1,.,0.57,6.57,79.6,M
5:1,.,1.12,10.5,79.6,M
...</code></pre>

  <p>
    The search itself has not changed. The <code>-n</code> option only adds the line number to each matching result.
  </p>

  <p>
    Subject 1 begins on line 2 because line 1 contains the header.
  </p>

  <h2>6. Count the records for Subject 1</h2>

  <p>
    Next ask:
  </p>

  <p><strong>How many records are stored for Subject 1?</strong></p>

  <pre><code>grep -c "^1," theophylline.csv</code></pre>

  <p>
    Output:
  </p>

  <pre><code>11</code></pre>

  <p>
    The <code>-c</code> option counts matching lines instead of printing them. Subject 1 has 11 rows in the file.
  </p>

  <p>
    Be precise about what we have counted: <strong>11 matching records</strong>, not necessarily 11 measured concentration values. The first Subject 1 row is the time-zero row and its <code>CONC</code> field contains <code>.</code>. <code>grep -c</code> counts lines matching our text pattern; it does not understand the scientific meaning of missing concentration values.
  </p>

  <p>
    This gives us a useful progression:
  </p>

  <p><strong>find records → locate records → count records</strong></p>

  <h2>7. Exclude Subject 1</h2>

  <p>
    Now reverse the question:
  </p>

  <p><strong>What if we want to inspect everything except Subject 1?</strong></p>

  <pre><code>grep -v "^1," theophylline.csv</code></pre>

  <p>
    The <code>-v</code> option inverts the match. Lines beginning with <code>1,</code> are excluded, while the other lines are printed.
  </p>

  <p>
    Notice that the header remains:
  </p>

  <pre><code>ID,AMT,TIME,CONC,WEIGHT,SEX
2,4.4,0,.,72.4,M
2,.,0.27,1.72,72.4,M
...</code></pre>

  <p>
    This happens because the header does not match <code>^1,</code>.
  </p>

  <p>
    The conceptual contrast is:
  </p>

  <p>
    <strong>normal grep = include matching lines</strong><br />
    <strong><code>-v</code> = exclude matching lines</strong>
  </p>

  <h2>8. Ignore capitalization when searching text</h2>

  <p>
    The current dataset stores sex using uppercase <code>M</code> and <code>F</code>. We can deliberately search using a lowercase letter and ask <code>grep</code> to ignore capitalization:
  </p>

  <pre><code>grep -i ",f$" theophylline.csv</code></pre>

  <p>
    The <code>-i</code> option makes the search case-insensitive. Even though our pattern contains lowercase <code>f</code>, it matches rows whose final field is uppercase <code>F</code>.
  </p>

  <p>
    Case-insensitive searching becomes especially useful when real files contain textual categories, treatment names, or labels with inconsistent capitalization.
  </p>

  <h2>One dataset, a sequence of questions</h2>

  <table class="science-table" data-id="rk-2026-026-grep-workflow">
    <caption>Table 2: The grep workflow applied to the supplied pharmacology dataset.</caption>
    <thead>
      <tr>
        <th scope="col">Question</th>
        <th scope="col">Command</th>
        <th scope="col">What changes?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>What does the raw file look like?</td>
        <td><code>cat theophylline.csv</code></td>
        <td>Print the text file.</td>
      </tr>
      <tr>
        <td>What is at the beginning of the file?</td>
        <td><code>head theophylline.csv</code></td>
        <td>Inspect the first few lines.</td>
      </tr>
      <tr>
        <td>Which lines contain a visible value?</td>
        <td><code>grep "79.6" theophylline.csv</code></td>
        <td>Plain text matching.</td>
      </tr>
      <tr>
        <td>Which records belong to Subject 1?</td>
        <td><code>grep "^1," theophylline.csv</code></td>
        <td>Require <code>1,</code> at the beginning of the line.</td>
      </tr>
      <tr>
        <td>Which records end with the female category?</td>
        <td><code>grep ",F$" theophylline.csv</code></td>
        <td>Require <code>,F</code> at the end of the line.</td>
      </tr>
      <tr>
        <td>Where are Subject 1 records?</td>
        <td><code>grep -n "^1," theophylline.csv</code></td>
        <td>Add line numbers.</td>
      </tr>
      <tr>
        <td>How many Subject 1 records exist?</td>
        <td><code>grep -c "^1," theophylline.csv</code></td>
        <td>Count matching lines.</td>
      </tr>
      <tr>
        <td>Show everything except Subject 1.</td>
        <td><code>grep -v "^1," theophylline.csv</code></td>
        <td>Invert the match.</td>
      </tr>
      <tr>
        <td>Ignore capitalization when searching the final category.</td>
        <td><code>grep -i ",f$" theophylline.csv</code></td>
        <td>Use case-insensitive matching.</td>
      </tr>
    </tbody>
  </table>

  <h2>What grep understands—and what it does not</h2>

  <p>
    We have already answered useful questions from the terminal:
  </p>

  <ul>
    <li>Which records belong to Subject 1?</li>
    <li>Where are those records in the file?</li>
    <li>How many Subject 1 rows are present?</li>
    <li>Can Subject 1 be excluded from inspection?</li>
    <li>Which records end with a particular categorical value?</li>
  </ul>

  <p>
    But <code>grep</code> is still operating on <strong>text</strong>. It does not inherently know that <code>ID</code> is a subject identifier, <code>TIME</code> is a sampling-time variable, <code>CONC</code> is a concentration variable, or <code>WEIGHT</code> is numeric.
  </p>

  <p>
    It also does not automatically understand that <code>.</code> represents a missing or non-entered value in this file. We understand these meanings because we know the dataset structure.
  </p>

  <p>
    That is why <code>grep</code> is excellent for quick inspection and simple filtering, but it is not a replacement for statistical data analysis.
  </p>

  <h2>Bridge to the next article: from text fields to variables</h2>

  <p>
    We can now inspect the dataset comfortably as a text file. The next questions require a different kind of tool:
  </p>

  <ul>
    <li>How do we treat <code>TIME</code>, <code>CONC</code>, and <code>WEIGHT</code> as numeric variables?</li>
    <li>How do we identify missing values correctly?</li>
    <li>How do we organize these six columns as a structured dataset?</li>
    <li>How do we calculate summaries?</li>
    <li>How do we compare subjects?</li>
    <li>How do we plot concentration against time?</li>
  </ul>

  <p>
    Those questions require software that understands rows and columns as data rather than merely sequences of characters.
  </p>

  <p>
    <strong>How can we move this same pharmacology file from text into an environment that understands its columns as variables?</strong>
  </p>

  <p>
    The next article will use this same dataset to introduce R, data frames, and vectors.
  </p>

  <h2>Further reading</h2>

  <p>
    The
    <a href="https://www.gnu.org/software/grep/manual/grep.html" target="_blank" rel="noopener noreferrer">official GNU grep manual</a>
    documents the pattern-matching behaviour and options used here, including <code>-n</code>, <code>-c</code>, <code>-v</code>, <code>-i</code>, and the <code>^</code> and <code>$</code> anchors. @gnuGrepManual
  </p>
</article>
  `};export{e as default};
