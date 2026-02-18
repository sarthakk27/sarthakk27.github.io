export const blogPosts = [
  {
    slug: 'my-first-blog-post',
    title: 'my first blog post',
    date: '28/01/2026',
    excerpt: 'welcome to my blog! this is where i share my thoughts, experiences, and learnings in web development and beyond.',
    content: `
      <p>
        hello there! welcome to my blog. this is my little corner of the internet where i'll be sharing
        my thoughts, experiences, and learnings as i navigate through the world of web development.
      </p>

      <h2>why start a blog?</h2>
      
      <p>
        i've always believed that writing helps clarify thinking. when you try to explain something
        to others, you often discover gaps in your own understanding. plus, i think it's important
        to document the journey—not just the successes, but also the struggles and the lessons learned
        along the way.
      </p>

      <h2>what to expect</h2>
      
      <p>
        this blog will cover a variety of topics, mostly centered around web development, programming,
        and technology. you can expect posts about:
      </p>

      <ul>
        <li>react and modern javascript frameworks</li>
        <li>web design and user experience</li>
        <li>coding challenges and problem-solving</li>
        <li>tools and workflows that make development easier</li>
        <li>personal projects and experiments</li>
      </ul>

      <h2>a bit about me</h2>
      
      <p>
        i'm a developer who loves building things for the web. when i'm not coding, you might find me
        exploring art, watching movies, or tinkering with new technologies. this portfolio site itself
        is a reflection of my interests—from the typing effect on the homepage to the various sections
        showcasing different aspects of my work.
      </p>

      <h2>let's connect</h2>
      
      <p>
        i'd love to hear from you! whether you have questions, feedback, or just want to say hi,
        feel free to reach out. you can find me on <a href="https://github.com/sarthakk27" target="_blank" rel="noopener noreferrer">github</a> 
        or at <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
      </p>

      <p>
        thanks for stopping by, and i hope you find something valuable here!
      </p>
    `
  },
  {
    slug: 'connecting-pentaho-with-sql-server',
    title: 'how to connect pentaho with sql server',
    date: '10/02/2026',
    excerpt: 'a step-by-step guide to connecting pentaho data integration with microsoft sql server for seamless data operations.',
    content: `
      <p>
        [Add your introduction here - explain why connecting Pentaho with SQL Server is important 
        and what readers will learn from this guide.]
      </p>

      <h2>prerequisites</h2>
      
      <p>
        before we begin, make sure you have the following:
      </p>

      <ul>
        <li>pentaho data integration (kettle) installed on your system</li>
        <li>microsoft sql server instance running and accessible</li>
        <li>sql server jdbc driver (mssql-jdbc)</li>
        <li>database credentials (username, password, server address)</li>
        <li>[Add any other prerequisites]</li>
      </ul>

      <h2>step 1: downloading the jdbc driver</h2>
      
      <p>
        [Explain where to download the SQL Server JDBC driver and which version to choose]
      </p>

      <pre><code>// Example: Download URL or command
// https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server</code></pre>

      <h2>step 2: installing the jdbc driver in pentaho</h2>
      
      <p>
        [Explain how to place the JDBC driver in the correct Pentaho directory]
      </p>

      <ul>
        <li>locate your pentaho installation directory</li>
        <li>navigate to the lib folder: <code>/data-integration/lib</code></li>
        <li>copy the jdbc driver jar file to this directory</li>
        <li>[Add specific steps]</li>
      </ul>

      <h2>step 3: configuring the database connection</h2>
      
      <p>
        [Walk through the process of creating a new database connection in Pentaho Spoon]
      </p>

      <ol>
        <li>open pentaho data integration (spoon)</li>
        <li>click on "view" tab and right-click on "database connections"</li>
        <li>select "new" to create a new connection</li>
        <li>[Continue with specific configuration steps]</li>
      </ol>

      <h2>connection settings</h2>
      
      <p>
        here are the typical connection settings you'll need to configure:
      </p>

      <pre><code>Connection Name: [Your connection name]
Connection Type: MS SQL Server
Access: Native (JDBC)
Host Name: localhost (or your server address)
Database Name: [Your database name]
Port Number: 1433 (default SQL Server port)
Username: [Your SQL Server username]
Password: [Your SQL Server password]</code></pre>

      <h2>step 4: testing the connection</h2>
      
      <p>
        [Explain how to test if the connection is working properly]
      </p>

      <ul>
        <li>click the "test" button in the database connection dialog</li>
        <li>verify that you see a success message</li>
        <li>[Add troubleshooting tips if the connection fails]</li>
      </ul>

      <h2>common connection string format</h2>
      
      <pre><code>jdbc:sqlserver://[serverName\\instanceName][:portNumber];
databaseName=[databaseName];
user=[userName];
password=[password];</code></pre>

      <h2>troubleshooting common issues</h2>
      
      <h3>issue 1: driver not found</h3>
      <p>
        [Explain how to resolve driver not found errors]
      </p>

      <h3>issue 2: connection timeout</h3>
      <p>
        [Explain how to handle timeout issues]
      </p>

      <h3>issue 3: authentication failed</h3>
      <p>
        [Explain authentication troubleshooting steps]
      </p>

      <h2>example transformation</h2>
      
      <p>
        [Provide a simple example of reading data from SQL Server using the connection you just created]
      </p>

      <pre><code>// Example: Simple SELECT query
SELECT 
    column1,
    column2,
    column3
FROM 
    your_table
WHERE 
    condition = 'value';</code></pre>

      <h2>best practices</h2>
      
      <ul>
        <li>always use connection pooling for better performance</li>
        <li>secure your credentials using pentaho's encryption features</li>
        <li>test your connection before deploying to production</li>
        <li>[Add your own best practices]</li>
      </ul>

      <h2>conclusion</h2>
      
      <p>
        [Summarize what readers have learned and encourage them to try it out. 
        Mention any additional resources or next steps.]
      </p>

      <p>
        have questions or run into issues? feel free to reach out at 
        <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
      </p>
    `
  }
];
