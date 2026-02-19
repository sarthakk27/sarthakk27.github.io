// ============================================
// BLOG POSTS DATA
// ============================================
// To add a new blog post, see BLOG_GUIDE.md in the root directory
// Or check blogExample.js for a complete example

// Import helper functions for easy formatting
import { create } from 'canvas-confetti';
import { 
  createImage, 
  createHighlight, 
  createSQLQuery, 
  createCodeBlock, 
  createInlineCode 
} from './blogTemplate';

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
        connecting pentaho data integration to microsoft sql server is a fundamental task
        for data engineers. this guide walks you through the complete process.
      </p>

      ${createHighlight('💡 <strong>What you\'ll learn:</strong> JDBC driver setup, connection configuration, testing, and troubleshooting common issues.', 'info')}

      <h2>prerequisites</h2>
      
      <p>
        before we begin, make sure you have the following:
      </p>

      <ul>
        <li>pentaho data integration (kettle) installed on your system</li>
        <li>microsoft sql server instance running and accessible</li>
        <li>java version 11 installed on your system (note: pentaho works best with java version 11)</li>
      </ul>

      <h2>step 1: Open SQL Server Configuration Manager</h2>
      <p><bold>Press Win + R, Then run:<bold></p>
    
      ${createCodeBlock(`SQL 2017 → SQLServerManager14.msc`, 'text')}
      ${createCodeBlock(`SQL 2019 → SQLServerManager15.msc `, 'text')}
      ${createCodeBlock(`SQL 2022 → SQLServerManager16.msc`, 'text')}
      

      <p>
        still, if any of the above commands don't work, you can manually navigate to the SQL Server Configuration Manager by navigating to the following directory in File Explorer:
      </p>

      ${createCodeBlock(`C:\\Windows\\System32\\`, 'text')}

      <p>and search for:</p>
      ${createCodeBlock(`SQLServerManager`, 'text')}
      
      <p>Open the SQL Server Configuration Manager. now, you will see this interface:</p> 
      ${createImage('/photos/sqlServerManagerConfig.png', 'SQL Server Configuration Manager interface', 'SQL Server Configuration Manager showing network configuration options','small')}
        
      <p>go to 'Protocols for MSSQLServer'</p> 
      <h2>step 2: Disable  Shared Memory</h2>
      <p>Shared Memory protocol is enabled by default, but it can cause connection issues with Pentaho. To ensure a successful connection, we need to disable the Shared Memory protocol. Select Shared Memory and right click it to disable it</p>
      ${createImage('/photos/sharedMemory.png', 'Shared Memory Protocol', 'Disable Shared Memory protocol','medium')}
    

      <h2>step 3: Enable TCP/IP Protocol</h2>
      <p>After disabling Shared Memory, we need to enable the TCP/IP protocol:</p>
      ${createImage('/photos/tcpIp.png', 'TCP/IP Protocol', 'Enable TCP/IP protocol')}

      <p>After enabling TCP/IP, right click on it and select <strong>'Properties'</strong>. In the properties window, go to the <strong>'IP Addresses'</strong> tab. Scroll down to the bottom and find the section for <strong>IPAll</strong>. In the TCP Port field, enter <strong>1433</strong> (the default port for SQL Server). Click <strong>OK</strong> to save the changes.</p>
      ${createImage('/photos/tcpIpProperties.png', 'TCP/IP Properties', 'Set TCP Port to 1433 in TCP/IP properties', 'large')}

      <h2>step 4: Restart SQL Server Services</h2>
      <p>After making these changes, we need to restart the SQL Server services for the changes to take effect. In the SQL Server Configuration Manager, go to <strong>'SQL Server Services'</strong>. Right click on <strong>'SQL Server (MSSQLSERVER)'</strong> and select <strong>'Restart'</strong>.</p>
      ${createImage('/photos/restartServices.png', 'Restart SQL Server Services', 'Restart SQL Server')}
     
     
      <h2>step 5: Create a SQL Server User</h2>     
      <p>To connect Pentaho to SQL Server, we need to create a SQL Server user with the appropriate permissions. Open SQL Server Management Studio and connect to your SQL Server instance. In the Object Explorer, right click the server and choose <strong>'Properties'</strong>. In the Server Properties window, go to the <strong>'Security'</strong> page and select <strong>'SQL Server and Windows Authentication mode'</strong>. Click <strong>OK</strong> to save the changes.</p>
      ${createImage('/photos/authenticationMode.png', 'Authentication Mode', )}
      ${createImage('/photos/serverProperties.png', 'Server Properties', 'Set authentication mode to SQL Server and Windows Authentication')}

      
      <p>Create a User and Grant the permissions using below queries:</p>
      ${createSQLQuery(`CREATE LOGIN pentaho_user
  WITH PASSWORD = 'Pentaho@123',
  CHECK_POLICY = OFF;
  GO
  
  
  ALTER LOGIN pentaho_user ENABLE;
  GO
  
  --Replace User name and password according to you`, 'sql')}
  
  ${createSQLQuery(`USE test_db;
    GO
    CREATE USER pentaho_user FOR LOGIN pentaho_user;
ALTER ROLE db_owner ADD MEMBER pentaho_user;
GO

--Replace test_db with your database name and pentaho_user with your user name`, 'sql')}



    <br>
    <p>Now, restart SQL Server Management Studio and Select <strong>'SQl Server Authentication' and then enter the User Name and Password and connect</strong></p>
    ${createImage('/photos/connectToSqlServer.png', 'Connect to SQL Server', 'Connect using SQL Server Authentication')}

      <h2>step 6: installing the jdbc driver in pentaho</h2>
            
      <p><strong>Note:</strong> The JDBC driver is a .jar file that allows Pentaho to communicate with SQL Server. You can download the Microsoft JDBC Driver for SQL Server from the official Microsoft website.</p>
      links to download the driver:
      <br>
      <a href="https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server" target="_blank" rel="noopener noreferrer">Microsoft JDBC Driver for SQL Server</a></li> <br>
      <a href="https://go.microsoft.com/fwlink/?linkid=2338346" target="_blank" rel="noopener noreferrer">Direct Download Link</a>
      <p>mssql-jdbc-13.2.1.jre11.jar</p>
      
      <p>
        place the jdbc driver in the correct pentaho directory:
      </p>
      <ul>
        <li>locate your pentaho installation directory</li>
        <li>navigate to the lib folder: ${createInlineCode('/data-integration/lib')}</li>
        <li>copy the jdbc driver jar file to this directory</li>
        <li>restart pentaho spoon after copying the driver</li>
      </ul>

      ${createHighlight('<strong>Important:</strong> You must restart Pentaho Spoon after adding the JDBC driver for it to be recognized.', 'warning')}

      <h2>step 7: Add JAVA path in System Environment Variables</h2>
      <p>Ensure that the JAVA_HOME environment variable is set correctly:</p>
      <ul>
        <li>Open System Properties (Right-click "This PC" > Properties > Advanced System Settings)</li>
        <li>Click "Environment Variables"</li>
        <li>In the "System Variables" section, click "New"</li>
        <li>Set the variable name to "JAVA_HOME"</li>
        <li>Set the variable value to your Java installation path (e.g., C:\Program Files\Java\jdk-11)</li>
        <li>Click OK to save</li>
      </ul>

      <h2>step 3: configuring the database connection</h2>
      
      <p>
        create a new connection in pentaho spoon:
      </p>

      <ol>
        <li>open pentaho data integration (spoon)</li>
        <li>click on "view" tab and right-click on "database connections"</li>
        <li>select "new" to create a new connection</li>
        <li>fill in the connection details as shown below</li>
      </ol>

      <h2>connection settings</h2>
      
      <p>
        here are the typical connection settings you'll need to configure:
      </p>

      ${createCodeBlock(`Connection Name: SQLServerConnection
Connection Type: MS SQL Server
Access: Native (JDBC)
Host Name: localhost
Database Name: YourDatabase
Port Number: 1433
Username: your_username
Password: your_password`, 'text')}

      <h2>step 4: testing the connection</h2>
      
      <p>
        once configured, test your connection:
      </p>

      <ul>
        <li>click the "test" button in the database connection dialog</li>
        <li>verify that you see a success message</li>
        <li>if it fails, check the troubleshooting section below</li>
      </ul>

      ${createHighlight('✅ <strong>Success!</strong> If the test passes, you\'re ready to start building transformations.', 'success')}

      <h2>common connection string format</h2>
      
      <p>
        for advanced scenarios, you may need a custom connection string:
      </p>

      ${createSQLQuery(`jdbc:sqlserver://[serverName\\\\instanceName][:portNumber];
databaseName=[databaseName];
user=[userName];
password=[password];
encrypt=true;
trustServerCertificate=false;`)}

      <h2>troubleshooting common issues</h2> 
      
      <h3>issue 1: driver not found</h3>
      <p>
        if you get a "driver not found" error, verify the jar file is in the correct directory
        and that you restarted pentaho spoon.
      </p>

      <h3>issue 2: connection timeout</h3>
      <p>
        timeout issues usually indicate network problems or firewall blocking. check if sql server
        is listening on the specified port and that your firewall allows the connection.
      </p>

      ${createCodeBlock(`# Test if port is accessible
telnet your-server 1433

# Check if SQL Server is listening
netstat -an | grep 1433`, 'bash')}

      <h3>issue 3: authentication failed</h3>
      <p>
        verify your credentials are correct and that sql server authentication is enabled
        (not just windows authentication).
      </p>

      <h2>example transformation</h2>
      
      <p>
        test your connection with a simple query:
      </p>

      ${createSQLQuery(`SELECT 
    DB_NAME() as DatabaseName,
    USER_NAME() as CurrentUser,
    @@VERSION as SQLServerVersion,
    GETDATE() as CurrentDateTime;`)}

      <h2>best practices</h2>
      
      <ul>
        <li>always use connection pooling for better performance</li>
        <li>secure your credentials using pentaho's encryption features</li>
        <li>test your connection before deploying to production</li>
        <li>monitor connection usage to avoid exhausting the pool</li>
        <li>use parameterized queries to prevent sql injection</li>
      </ul>

      ${createHighlight('🔐 <strong>Security Tip:</strong> Never hardcode production passwords. Use Pentaho\'s encryption or environment variables.', 'tip')}

      <h2>conclusion</h2>
      
      <p>
        you now have a fully functional connection between pentaho and sql server. this forms
        the foundation for building powerful etl workflows. in future posts, i'll cover advanced
        topics like bulk loading and performance optimization.
      </p>

      <p>
        have questions or run into issues? feel free to reach out at 
        <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
      </p>
    `
  }
];
