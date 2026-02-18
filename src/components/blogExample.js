// ============================================
// EXAMPLE: How to Add a New Blog Post
// ============================================
// This file shows you exactly how to create a new blog post using the helper functions

import { createImage, createHighlight, createSQLQuery, createCodeBlock, createInlineCode } from './blogTemplate';

// Example Blog Post - Copy this structure for your new posts!
export const exampleBlogPost = {
  slug: 'pentaho-sql-server-complete-guide',
  title: 'complete guide to connecting pentaho with sql server',
  date: '15/02/2026',
  excerpt: 'learn how to seamlessly connect pentaho data integration with microsoft sql server, including JDBC setup, connection configuration, and troubleshooting.',
  
  content: `
    <p>
      connecting pentaho data integration (PDI) to microsoft sql server is a common requirement
      for data engineers and analysts. in this comprehensive guide, i'll walk you through every
      step of the process, from downloading drivers to testing your connection.
    </p>

    ${createHighlight('💡 <strong>What you\'ll learn:</strong> JDBC driver installation, connection configuration, troubleshooting tips, and best practices for production environments.', 'info')}

    <h2>prerequisites</h2>
    
    <p>
      before we begin, make sure you have:
    </p>

    <ul>
      <li>pentaho data integration (kettle) 9.0 or higher installed</li>
      <li>microsoft sql server 2016 or higher running</li>
      <li>database credentials with appropriate permissions</li>
      <li>administrator access to your pentaho installation directory</li>
    </ul>

    <h2>step 1: download the jdbc driver</h2>
    
    <p>
      the first step is to download the microsoft jdbc driver for sql server. visit the official
      microsoft documentation and download the latest stable version. as of writing, the recommended
      version is ${createInlineCode('mssql-jdbc-12.2.0.jre11.jar')}.
    </p>

    ${createHighlight('⚠️ <strong>Important:</strong> Make sure to download the version compatible with your Java runtime. PDI typically uses Java 11.', 'warning')}

    <h2>step 2: install the jdbc driver</h2>
    
    <p>
      locate your pentaho installation directory and navigate to the lib folder:
    </p>

    ${createCodeBlock(`# Navigate to PDI's lib directory
cd /path/to/data-integration/lib

# Copy the JDBC driver here
cp ~/Downloads/mssql-jdbc-12.2.0.jre11.jar .

# Verify the file is in place
ls -la mssql-jdbc*`, 'bash')}

    <p>
      restart pentaho spoon after copying the driver to ensure it's loaded properly.
    </p>

    <h2>step 3: create the database connection</h2>
    
    <p>
      open pentaho spoon and follow these steps to create your connection:
    </p>

    <ol>
      <li>in the left panel, find the "Database connections" section under "View"</li>
      <li>right-click and select "New"</li>
      <li>the database connection dialog will open</li>
    </ol>

    ${createImage('/images/pentaho-connection-dialog.png', 'Pentaho database connection dialog', 'Database connection configuration screen in Pentaho Spoon')}

    <h2>connection configuration</h2>
    
    <p>
      fill in the connection details as shown below:
    </p>

    ${createCodeBlock(`Connection Name: SQLServerProd
Connection Type: MS SQL Server
Access: Native (JDBC)
Host Name: localhost
Database Name: YourDatabase
Port Number: 1433
Username: sa
Password: YourPassword`, 'text')}

    ${createHighlight('🔐 <strong>Security Tip:</strong> Never hardcode production passwords in transformations. Use Pentaho\'s encryption features or environment variables instead.', 'tip')}

    <h2>advanced connection string</h2>
    
    <p>
      for more complex scenarios, you might need to use a custom connection string:
    </p>

    ${createSQLQuery(`jdbc:sqlserver://server.example.com:1433;
databaseName=YourDatabase;
user=YourUsername;
password=YourPassword;
encrypt=true;
trustServerCertificate=false;
loginTimeout=30;`)}

    <h2>testing the connection</h2>
    
    <p>
      once you've entered all the details, click the ${createInlineCode('Test')} button at the
      bottom of the dialog. you should see a success message:
    </p>

    ${createHighlight('✅ <strong>Success:</strong> Connection to database \'YourDatabase\' was successful!', 'success')}

    <h2>common troubleshooting issues</h2>
    
    <h3>error: driver not found</h3>
    <p>
      if you see this error, the JDBC driver wasn't properly installed. verify:
    </p>

    <ul>
      <li>the .jar file is in the ${createInlineCode('data-integration/lib')} directory</li>
      <li>you restarted pentaho spoon after adding the driver</li>
      <li>the jar file has proper read permissions</li>
    </ul>

    <h3>error: connection timeout</h3>
    <p>
      timeout errors usually indicate network or firewall issues:
    </p>

    ${createCodeBlock(`# Test connectivity from command line
telnet your-server.com 1433

# Check if SQL Server is listening
netstat -an | grep 1433`, 'bash')}

    <h3>error: login failed for user</h3>
    <p>
      this is an authentication issue. verify your credentials and ensure:
    </p>

    <ul>
      <li>sql server authentication is enabled (not just windows auth)</li>
      <li>the user has permission to access the database</li>
      <li>the password doesn't contain special characters that need escaping</li>
    </ul>

    <h2>example transformation</h2>
    
    <p>
      here's a simple example query to test your connection is working properly:
    </p>

    ${createSQLQuery(`SELECT 
    DB_NAME() as DatabaseName,
    USER_NAME() as CurrentUser,
    @@VERSION as SQLServerVersion,
    GETDATE() as CurrentDateTime;`)}

    <p>
      this query will show you the database name, current user, sql server version, and timestamp.
    </p>

    <h2>best practices for production</h2>
    
    <ul>
      <li><strong>use connection pooling</strong> - enable it in the connection settings for better performance</li>
      <li><strong>encrypt credentials</strong> - use pentaho's encr utility to encrypt passwords</li>
      <li><strong>use parameterized queries</strong> - protect against sql injection</li>
      <li><strong>implement retry logic</strong> - handle transient connection failures gracefully</li>
      <li><strong>monitor connections</strong> - track open connections to avoid exhausting the pool</li>
    </ul>

    ${createHighlight('📊 <strong>Performance Tip:</strong> Enable connection pooling with max pool size of 10-20 for most workloads. Adjust based on your concurrent transformation needs.', 'tip')}

    <h2>conclusion</h2>
    
    <p>
      you now have a fully functional connection between pentaho and sql server! this setup forms
      the foundation for building powerful data integration workflows. from here, you can create
      transformations to extract, transform, and load data between systems.
    </p>

    <p>
      in future posts, i'll cover advanced topics like bulk loading, change data capture with pentaho,
      and optimizing sql server queries in your transformations.
    </p>

    <p>
      questions or issues? reach out at <a href="https://linuxusers.in/sarthak" target="_blank" rel="noopener noreferrer">@sarthak@linuxusers.in</a>.
    </p>
  `
};

// ============================================
// HOW TO USE THIS TEMPLATE
// ============================================
/*

1. Copy the structure above
2. Change the slug, title, date, and excerpt
3. Write your content using the helper functions:
   - ${createImage(src, alt, caption)}
   - ${createHighlight(content, type)}
   - ${createSQLQuery(query)}
   - ${createCodeBlock(code, language)}
   - ${createInlineCode(code)}

4. Add your new blog object to the blogPosts array in blogData.js

That's it! The styling and formatting will be automatically applied.

*/
