import { Article } from "../../lib/types";
import blastHomePage from "./article_images/024_001.png";
import blastnInterface from "./article_images/024_002.png";
import blastpInterface from "./article_images/024_003.png";
import blastDescriptionsTable from "./article_images/024_004.png";
import blastPairwiseAlignment from "./article_images/024_005.png";

const article: Article = {
  id: "RK-2026-024",
  title:
    "Pairwise Sequence Alignment with NCBI BLAST: Local vs. Global Alignment, BLASTn/BLASTp, and Result Interpretation",
  date: "2026-09-11",
  tags: ["#BLAST", "#SequenceAlignment", "#bioinformatics"],
  type: "report",
  template: "standard",
  readTime: "20 min",
  author: {
    name: "RK Patel",
    role: "Microbiologist",
    avatar: "https://github.com/RKPatel-1996.png",
    affiliation: "Gujarat University",
  },
  excerpt: "A biology-oriented guide to pairwise sequence alignment using NCBI BLAST. It explains when local and global alignment are appropriate, how to run nucleotide and protein comparisons with BLASTn and BLASTp, and how to interpret the BLAST results table with particular attention to E-values, bit scores, query coverage, and percent identity.",
  content: `
<article>
  <h2>1. Why sequence alignment is useful</h2>
  <p>
    Sequence alignment places DNA, RNA, or protein sequences beside one another so that matching and differing positions can be examined. For a biologist, the purpose is not simply to obtain a numerical score. Alignment helps answer biological questions such as: <em>Are these sequences related?</em> <em>Is the same gene present in two organisms?</em> <em>Does a protein contain a conserved region?</em> or <em>Where do two isolates differ?</em>
  </p>
  <p>
    This article focuses on three practical skills: understanding <strong>local versus global alignment</strong>, performing pairwise comparisons with <strong>BLASTn</strong> and <strong>BLASTp</strong>, and interpreting the most useful values in BLAST output. The internal mathematics of BLAST is kept to a minimum; the emphasis is on choosing the right approach and making biologically defensible interpretations.
  </p>

  <h2>2. Local alignment versus global alignment</h2>
  <p>
    The first decision in pairwise sequence comparison is whether the biological question concerns the <strong>whole sequence</strong> or only the <strong>best-matching region</strong>. NCBI defines global alignment as alignment over the entire length of two sequences, whereas local alignment identifies a high-scoring region within the sequences.<sup><a href="#ref1">1</a></sup>
  </p>

  <table class="science-table" data-id="rk024-alignment-strategies">
    <caption>Table 1: Global and local alignment answer different biological questions.</caption>
    <thead>
      <tr>
        <th scope="col">Feature</th>
        <th scope="col">Global alignment</th>
        <th scope="col">Local alignment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Main idea</strong></td>
        <td>Attempts to align the two sequences from end to end.</td>
        <td>Finds the strongest matching region or regions within the sequences.</td>
      </tr>
      <tr>
        <td><strong>Best suited for</strong></td>
        <td>Sequences of similar length that are expected to be related across most of their length.</td>
        <td>Sequences that may share only a domain, motif, exon, gene fragment, or other conserved region.</td>
      </tr>
      <tr>
        <td><strong>Typical biological question</strong></td>
        <td>How similar are two complete alleles, genes, or proteins?</td>
        <td>Does this sequence contain a region related to part of another sequence?</td>
      </tr>
      <tr>
        <td><strong>Classical algorithm</strong></td>
        <td>Needleman-Wunsch.</td>
        <td>Smith-Waterman is an exact local-alignment algorithm; BLAST is a faster heuristic local-search method.</td>
      </tr>
    </tbody>
  </table>

  <h3>2.1 A biological example</h3>
  <p>
    Imagine two proteins that have very different N-terminal and C-terminal regions but share the same conserved catalytic domain in the middle. A global alignment tries to account for the entire lengths of both proteins, including poorly related regions. A local alignment can instead highlight the conserved domain directly. This is why local alignment is particularly useful when evolution has preserved one functional region while the surrounding sequence has changed substantially.
  </p>
  <p>
    Global alignment is not incapable of showing a conserved region; rather, it is often a less suitable model when most of the two sequences are not expected to correspond. The choice should follow the biological question, not the assumption that one method is universally better.
  </p>

  <h2>3. Where BLAST fits</h2>
  <p>
    <strong>BLAST</strong> stands for <strong>Basic Local Alignment Search Tool</strong>. It is designed to find high-scoring <em>local</em> alignments quickly.<sup><a href="#ref1">1</a></sup> BLAST is commonly used to search a query sequence against a database, but the NCBI web forms can also compare only the sequences supplied by the user through the <strong>Align two or more sequences</strong> option.<sup><a href="#ref2">2</a></sup>
  </p>

  <figure class="science-figure" data-id="FIG-024-1" data-clean-src="${blastHomePage}">
    <img src="${blastHomePage}" alt="NCBI BLAST home page showing Nucleotide BLAST, translated BLAST options, and Protein BLAST" />
    <figcaption>Figure 1: The NCBI BLAST home page provides separate entry points for nucleotide and protein searches. For the practical work in this article, the important choices are Nucleotide BLAST and Protein BLAST.</figcaption>
  </figure>

  <table class="science-table" data-id="rk024-blast-choice">
    <caption>Table 2: Choosing between BLASTn and BLASTp for pairwise comparison.</caption>
    <thead>
      <tr>
        <th scope="col">Program</th>
        <th scope="col">Query</th>
        <th scope="col">Subject</th>
        <th scope="col">Use it when...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>BLASTn (blastn)</strong></td>
        <td>Nucleotide sequence</td>
        <td>Nucleotide sequence</td>
        <td>You want to compare DNA/RNA sequences, such as two gene sequences, amplicons, 16S rRNA sequences, alleles, or genomic fragments.</td>
      </tr>
      <tr>
        <td><strong>BLASTp (blastp)</strong></td>
        <td>Protein sequence</td>
        <td>Protein sequence</td>
        <td>You want to compare amino-acid sequences, evaluate protein similarity, or examine conservation despite silent DNA changes.</td>
      </tr>
    </tbody>
  </table>

  <h2>4. Practical pairwise alignment with BLASTn</h2>
  <p>
    BLASTn compares nucleotide sequences. It is appropriate when both sequences are DNA or RNA represented in nucleotide form. The NCBI interface accepts a FASTA sequence or an accession number as input.
  </p>

  <figure class="science-figure" data-id="FIG-024-2" data-clean-src="${blastnInterface}">
    <img src="${blastnInterface}" alt="NCBI Standard Nucleotide BLAST interface showing the query box, search set, program selection, and Align two or more sequences checkbox" />
    <figcaption>Figure 2: NCBI Nucleotide BLAST interface. For a direct pairwise comparison, enter the first sequence as the query, select <strong>Align two or more sequences</strong>, and enter the second sequence in the Subject field that appears. Interface details and default databases may change over time.</figcaption>
  </figure>

  <h3>4.1 Step-by-step</h3>
  <ol>
    <li>Open <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank" rel="noopener noreferrer">NCBI BLAST</a> and choose <strong>Nucleotide BLAST</strong>.</li>
    <li>Paste the first nucleotide sequence into <strong>Enter Query Sequence</strong>. FASTA format is preferred when you are pasting a sequence.</li>
    <li>Select <strong>Align two or more sequences</strong>. NCBI then provides a <strong>Subject Sequence</strong> field; the supplied subject sequences effectively act as the comparison set.<sup><a href="#ref2">2</a></sup></li>
    <li>Paste the second nucleotide sequence into the Subject field.</li>
    <li>For two closely related nucleotide sequences, the highly similar-sequence option is usually a sensible starting point. If the sequences are more divergent or the expected matching region is short, standard blastn is generally more sensitive.</li>
    <li>Run BLAST and inspect the alignment length, identities, gaps, orientation, bit score, and E-value together.</li>
  </ol>

  <h3>4.2 What to look for biologically</h3>
  <p>
    In nucleotide comparisons, ask whether the matching region covers the part of the sequence you actually care about. A high percentage identity over only a tiny fragment is not equivalent to a high percentage identity across an entire gene. Also check the strand orientation: a <strong>Plus/Minus</strong> nucleotide alignment simply indicates that the subject match is on the reverse-complement strand relative to the query.
  </p>

  <h2>5. Practical pairwise alignment with BLASTp</h2>
  <p>
    BLASTp compares protein sequences. Protein-level comparison is often more informative when the biological question concerns conserved protein function because many nucleotide substitutions do not alter the encoded amino acid, and some amino-acid replacements are more conservative than others.
  </p>

  <figure class="science-figure" data-id="FIG-024-3" data-clean-src="${blastpInterface}">
    <img src="${blastpInterface}" alt="NCBI Standard Protein BLAST interface showing the protein query box, search set, blastp program selection, and Align two or more sequences checkbox" />
    <figcaption>Figure 3: NCBI Protein BLAST interface. For a direct protein-to-protein comparison, use standard blastp and select <strong>Align two or more sequences</strong> before entering the subject protein sequence.</figcaption>
  </figure>

  <h3>5.1 Step-by-step</h3>
  <ol>
    <li>Choose <strong>Protein BLAST</strong> from the NCBI BLAST home page.</li>
    <li>Paste the first amino-acid sequence into the Query field.</li>
    <li>Select <strong>Align two or more sequences</strong> and paste the second protein sequence into the Subject field.</li>
    <li>Start with standard <strong>blastp</strong> and its normal scoring settings unless the biological problem gives you a reason to change them.</li>
    <li>Run the comparison and inspect how much of each protein aligns, whether the aligned region contains long conserved blocks, and whether gaps or substitutions occur in biologically important regions.</li>
  </ol>

  <h3>5.2 BLOSUM and PAM: what a biologist needs to know</h3>
  <p>
    Protein BLAST uses a substitution matrix to decide how amino-acid matches and replacements contribute to an alignment score. The matrix matters because replacing leucine with isoleucine is not biologically equivalent to replacing leucine with a chemically very different residue. You do not need to calculate the matrix by hand to use BLAST effectively.
  </p>
  <p>
    NCBI uses <strong>BLOSUM62</strong> as the standard BLASTp matrix and notes that it performs well across a broad range of protein similarities. Different matrices can be useful for unusually short queries or particularly long, weak alignments.<sup><a href="#ref3">3</a></sup>
  </p>

  <table class="science-table" data-id="rk024-protein-matrix-guide">
    <caption>Table 3: Practical interpretation of common protein substitution matrices.</caption>
    <thead>
      <tr>
        <th scope="col">Situation</th>
        <th scope="col">Practical choice</th>
        <th scope="col">Biological reasoning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Routine protein comparison</td>
        <td><strong>BLOSUM62</strong></td>
        <td>A good general-purpose starting point; usually leave the default unchanged.</td>
      </tr>
      <tr>
        <td>Long proteins with weak, distant similarity</td>
        <td><strong>BLOSUM45</strong> may be tried</td>
        <td>It can increase sensitivity to distant relationships, but weaker matches also require more cautious biological interpretation.</td>
      </tr>
      <tr>
        <td>Short protein query</td>
        <td>Use NCBI's short-query adjustment; matrices such as <strong>PAM30</strong>, <strong>PAM70</strong>, or <strong>BLOSUM80</strong> may be selected depending on query length</td>
        <td>Short alignments must be relatively strong to stand out from chance similarity, so settings differ from ordinary full-length protein searches.</td>
      </tr>
    </tbody>
  </table>

  <p>
    A simple rule is: <strong>do not change the matrix merely because a different matrix exists</strong>. First use BLOSUM62. Consider a different matrix only when the sequence length or expected evolutionary distance gives a clear reason.
  </p>

  <h2>6. Pairwise mode versus database-search mode</h2>
  <p>
    The same BLASTn and BLASTp pages support two related but different tasks. In <strong>pairwise mode</strong>, you supply both query and subject sequences and ask how those known sequences align. In a <strong>database search</strong>, you supply a query and BLAST searches many database records for candidate matches. NCBI describes the pairwise Subject field as a custom comparison set rather than a normal database search.<sup><a href="#ref2">2</a></sup>
  </p>
  <p>
    This distinction matters for interpretation. If you already know the two sequences you want to compare, pairwise mode is direct and uncluttered. If the biological problem is <em>“What is this unknown sequence most similar to?”</em>, a database search is more appropriate, and the <strong>Descriptions</strong> table becomes the main starting point.
  </p>

  <h2>7. Reading the BLAST results table</h2>

  <figure class="science-figure" data-id="FIG-024-4" data-clean-src="${blastDescriptionsTable}">
    <img src="${blastDescriptionsTable}" alt="NCBI BLAST Descriptions table showing significant nucleotide matches with columns for score, query cover, E-value, percent identity, subject length, and accession" />
    <figcaption>Figure 4: Example BLAST Descriptions table for a 16S rRNA nucleotide query. The most useful columns for initial interpretation are Query Cover, E-value, Percent Identity, score, and Accession. The values should be interpreted together rather than one at a time.</figcaption>
  </figure>

  <table class="science-table" data-id="rk024-results-columns">
    <caption>Table 4: What the major BLAST result columns mean biologically.</caption>
    <thead>
      <tr>
        <th scope="col">Column</th>
        <th scope="col">Meaning</th>
        <th scope="col">How to use it</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Description / Scientific Name</strong></td>
        <td>Annotation and organism associated with the database record.</td>
        <td>Use it to identify candidate records, but remember that database annotation quality varies.</td>
      </tr>
      <tr>
        <td><strong>Max Score</strong></td>
        <td>The score of the single best local alignment segment between query and subject.</td>
        <td>Higher values indicate a stronger best-matching region.</td>
      </tr>
      <tr>
        <td><strong>Total Score</strong></td>
        <td>The combined score from all reported local alignment segments for that subject.</td>
        <td>A Total Score larger than the Max Score means more than one alignment segment contributes. It does <strong>not</strong> by itself prove multiple gene copies, exons, or repeated loci.</td>
      </tr>
      <tr>
        <td><strong>Query Cover</strong></td>
        <td>The proportion of the query represented by the reported alignment or alignments.</td>
        <td>Use it to distinguish a whole-sequence match from a match to only a small motif or domain.</td>
      </tr>
      <tr>
        <td><strong>E-value</strong></td>
        <td>The number of alignments with this score or better expected by chance in a search space of this size.</td>
        <td>Lower is stronger statistical evidence against a chance match; interpret it together with coverage and sequence composition.</td>
      </tr>
      <tr>
        <td><strong>Percent Identity</strong></td>
        <td>The percentage of aligned positions that contain exactly the same nucleotide or amino acid.</td>
        <td>Useful for measuring exact similarity within the aligned region. It is not the same thing as proving homology.</td>
      </tr>
      <tr>
        <td><strong>Accession</strong></td>
        <td>The identifier of the database record.</td>
        <td>Open the record to inspect annotation, sequence source, organism, and other biological context.</td>
      </tr>
    </tbody>
  </table>

  <h3>7.1 Reading the example in Figure 4</h3>
  <p>
    The first hit in the displayed 16S rRNA search has <strong>100% Query Cover</strong>, <strong>100% identity</strong>, a very high score, and an E-value reported as <strong>0.0</strong>. Together, these indicate an exceptionally strong match between the complete query and that database record. Several following records still show approximately 99% query coverage and about 99.4% identity, so they are also very close matches.
  </p>
  <p>
    The biological conclusion should still be phrased carefully. A strong 16S match supports close taxonomic similarity to the matched records, but species- or strain-level identification depends on whether the marker itself has enough resolving power and whether the reference annotation is reliable. BLAST similarity is evidence; it is not a substitute for biological context.
  </p>

  <h2>8. E-values: how surprising is the match?</h2>
  <p>
    The <strong>E-value</strong> or <strong>Expect value</strong> estimates how many alignments with an equal or better score would be expected to occur by chance in a search of this size. NCBI emphasizes a simple rule: <strong>the lower the E-value, the more statistically significant the alignment</strong>.<sup><a href="#ref1">1</a></sup>
  </p>

  <h3>8.1 Reading scientific notation</h3>
  <p>
    BLAST commonly writes very small numbers using scientific notation. For example, <strong>3e-4</strong> means 3 × 10<sup>-4</sup>, which is 0.0003. Likewise, <strong>1e-20</strong> means 1 × 10<sup>-20</sup>, an extremely small number.
  </p>

  <table class="science-table" data-id="rk024-evalue-guide">
    <caption>Table 5: Intuitive examples for interpreting BLAST E-values. These examples are guides, not universal biological cut-offs.</caption>
    <thead>
      <tr>
        <th scope="col">Example E-value</th>
        <th scope="col">Plain-language interpretation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1e-100</strong></td>
        <td>An extraordinarily small expected number of chance matches. The alignment has very strong statistical support.</td>
      </tr>
      <tr>
        <td><strong>1e-20</strong></td>
        <td>Still very strong statistical evidence that the alignment is not a random occurrence in this search.</td>
      </tr>
      <tr>
        <td><strong>1e-5</strong></td>
        <td>A low expected count that can be biologically meaningful, but the alignment length, coverage, sequence complexity, and biological question should also be checked.</td>
      </tr>
      <tr>
        <td><strong>0.1</strong></td>
        <td>About 0.1 chance alignments of this score or better are expected in this search space. This is much weaker evidence and deserves close inspection.</td>
      </tr>
      <tr>
        <td><strong>10</strong></td>
        <td>About 10 chance alignments of this score or better are expected. A hit at this level is generally poor evidence by itself.</td>
      </tr>
    </tbody>
  </table>

  <p>
    An E-value displayed as <strong>0.0</strong> should not be read as “chance is mathematically impossible.” It means the calculated value is so small that BLAST reports it as zero at the displayed precision. Also remember that E-values depend on the search space. The same local alignment can receive a different E-value when the effective database or search space changes.<sup><a href="#ref4">4</a></sup>
  </p>

  <h2>9. Bit score: how strong is the alignment?</h2>
  <p>
    BLAST first calculates an alignment score from matches, substitutions, and gaps. The <strong>bit score</strong> is a normalized version of that score. NCBI notes that this normalization allows bit scores to be compared across searches that use different scoring systems.<sup><a href="#ref1">1</a></sup>
  </p>
  <p>
    For interpretation, the practical rule is simple: <strong>higher bit score is better</strong>. A high bit score means that the local alignment itself is strong. A low E-value usually accompanies a high bit score, but the two values answer slightly different questions: the bit score describes alignment strength, whereas the E-value places that score into a statistical search context.
  </p>
  <p>
    Do not use bit score alone. A high score covering 95% of a protein and a high score covering only one short conserved domain may imply very different biology. Always combine score with <strong>Query Cover</strong>, <strong>Percent Identity</strong>, sequence length, and the biological function or region being studied.
  </p>

  <h2>10. Reading the actual pairwise alignment</h2>

  <figure class="science-figure" data-id="FIG-024-5" data-clean-src="${blastPairwiseAlignment}">
    <img src="${blastPairwiseAlignment}" alt="NCBI BLAST pairwise nucleotide alignment showing query and subject sequences, score, E-value, identities, gaps, and strand orientation" />
    <figcaption>Figure 5: Pairwise alignment view. After the summary statistics identify a promising hit, inspect the residue-by-residue alignment to see where matches, mismatches, gaps, and strand orientation actually occur.</figcaption>
  </figure>

  <p>
    The alignment view is where the summary statistics become biologically interpretable. In a nucleotide alignment, vertical match marks show identical positions, while gaps represent insertion/deletion differences introduced to produce the alignment. The coordinates show exactly which part of the query aligns to which part of the subject.
  </p>
  <p>
    For BLASTn, inspect <strong>Strand</strong> as well as identity and gaps. For BLASTp, also pay attention to conservative amino-acid substitutions: a protein alignment may retain biochemical similarity even when every aligned residue is not identical. The substitution matrix contributes to the protein alignment score for this reason.
  </p>

  <h2>11. A practical interpretation workflow</h2>
  <ol>
    <li><strong>Choose the biological comparison.</strong> Whole sequence or conserved region? Nucleotide or protein?</li>
    <li><strong>Choose BLASTn or BLASTp.</strong> Do not compare nucleotide sequences with BLASTp or protein sequences with BLASTn.</li>
    <li><strong>Use pairwise mode when both sequences are already known.</strong> Select <em>Align two or more sequences</em> and supply Query and Subject.</li>
    <li><strong>Start with default settings.</strong> For proteins, BLOSUM62 is the normal first choice; change matrices only for a clear reason.</li>
    <li><strong>Read coverage before celebrating identity.</strong> A 100% identical 20-residue region is not equivalent to a 100% identical full-length protein.</li>
    <li><strong>Read E-value and bit score together.</strong> Low E-value and high bit score strengthen the case that the alignment is not random.</li>
    <li><strong>Inspect the actual alignment.</strong> Check the positions of mismatches and gaps, not just the summary numbers.</li>
    <li><strong>Return to biology.</strong> Decide whether the matched region corresponds to a gene, domain, motif, marker, or other biologically meaningful feature.</li>
  </ol>

  <h2>12. Important cautions</h2>
  <ul>
    <li><strong>Similarity is not proof of homology.</strong> Homology means common ancestry. Sequence similarity can support a homology hypothesis, but BLAST does not experimentally prove ancestry.</li>
    <li><strong>A significant match is not automatically the same function.</strong> Closely related proteins may differ in substrate specificity, regulation, localization, or biological role.</li>
    <li><strong>Percent identity is meaningless without alignment length.</strong> Always check how much of the query is covered.</li>
    <li><strong>Short sequences often have less impressive E-values.</strong> NCBI notes that even identical short alignments can have relatively high E-values because short matches are more likely to occur by chance.<sup><a href="#ref4">4</a></sup></li>
    <li><strong>Database annotations can be wrong or incomplete.</strong> Follow the accession to the underlying record and, for important conclusions, seek additional evidence.</li>
  </ul>

  <h2>13. Take-home message</h2>
  <p>
    Global alignment asks how two sequences correspond across their full lengths; local alignment asks where the strongest matching region occurs. BLAST is a local-alignment search tool, and its BLASTn and BLASTp web forms can be used either for database searching or for direct pairwise comparison of sequences supplied by the user. For most biological interpretation, the essential habit is to read <strong>Query Cover, Percent Identity, bit score, E-value, and the actual alignment together</strong>. No single BLAST number should replace biological judgement.
  </p>

  <h2>References</h2>
  <ol>
    <li id="ref1">Fassler J, Cooper P. <a href="https://www.ncbi.nlm.nih.gov/books/NBK62051/" target="_blank" rel="noopener noreferrer">BLAST Glossary</a>. BLAST Help, National Center for Biotechnology Information.</li>
    <li id="ref2">National Center for Biotechnology Information. <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html" target="_blank" rel="noopener noreferrer">BLAST Help: Frequently Asked Questions</a>. See the guidance on aligning two or more sequences without a database search.</li>
    <li id="ref3">National Center for Biotechnology Information. <a href="https://www.ncbi.nlm.nih.gov/books/NBK279684/" target="_blank" rel="noopener noreferrer">BLAST Command Line Applications User Manual: Appendices</a>. See the section on BLAST substitution matrices and query-length recommendations.</li>
    <li id="ref4">National Center for Biotechnology Information. <a href="https://blast.ncbi.nlm.nih.gov/doc/blast-help/FAQ.html" target="_blank" rel="noopener noreferrer">BLAST Help: What is the Expect (E) Value?</a>.</li>
  </ol>
</article>
  `,
};

export default article;
