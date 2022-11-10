import React from 'react';

const Blog = () => {
  return (
    <section
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="w-11/12 leading-6 lg:w-10/12 mx-auto my-12 text-sm lg:text-md font-semibold text-[#939894]"
    >
      <article>
        <h2 className="font-bold text-xl">
          {' '}
          What are the differences between <code>SQL</code> and{' '}
          <code>NoSQL</code>?
        </h2>
        <h4 className="font-bold text-lg">What is SQL?</h4>
        <p>
          SQL or the Structured Query Language is the most common and popular
          programming language for the relational database management system. It
          is a language designed to extract, store, insert, delete, update and
          manage data for structured data and strategic analysis.
        </p>
        <h4 className="font-bold text-lg">What is NoSQL?</h4>
        <p>
          NoSQL database provides a mechanism for storage and retrieval of data
          that is modelled other than tabular form. It was introduced by Carl
          Stroz in the year 1998 called a Non-relational database. Now, it
          stands for Not only SQL. It is not limited to storing data in tables,
          instead, enables the big data to be stored in the structured,
          unstructured, semi-structured or polymorphic form.
        </p>

        <div style={{ background: 'white' }}>
          <p className="text-lg text-center font-bold mb-2">
            Differences between SQL and NoSQL
          </p>
          <table className="rounded-t-lg bg-gray-200 text-gray-800">
            <thead>
              <tr className="text-left border-b-2 border-gray-300">
                <th className="px-4 py-3">SQL</th>
                <th className="px-4 py-3">NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL databases are a type of system software that supports
                  management, analysis, capturing and querying the structured
                  data in a relational format.
                </td>
                <td className="px-4 py-3">
                  NoSQL databases are a type of software that allows to maintain
                  and retrieve structured, unstructured, polymorphic data for
                  different purposes.
                </td>
              </tr>

              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  A language used to communicate with databases for storage,
                  deletion, updation, insertion and retrieval of data.
                </td>
                <td className="px-4 py-3">
                  A software to retrieve, store and manage scalability of
                  databases.
                </td>
              </tr>

              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL was developed in the year 1970 for flat file storage
                  problems.
                </td>
                <td className="px-4 py-3">
                  NoSQL was developed in 2000 as an enhanced version for SQL
                  databases for unstructured and semi-structured data.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL databases support Structured Query Languages.
                </td>
                <td className="px-4 py-3">
                  NonSQL does not have any declarative query language.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">Supports table based data type.</td>
                <td className="px-4 py-3">
                  Supports document oriented, graph databases, key value
                  pair-based.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  Vertically Scalable (Add resources to increase the capacity of
                  the existing hardware and software).
                </td>
                <td className="px-4 py-3">
                  Horizontally Scalable (Changing small nodes with larger nodes
                  to increase the capacity of the existing hardware and
                  software).
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL supports predefined schemas, making the storage of data
                  restrictive to structured type only.
                </td>
                <td className="px-4 py-3">
                  Nosql supports dynamic schemas to store different forms of
                  data.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">SQL is relational.</td>
                <td className="px-4 py-3"> Non-SQL is non relational.</td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL is best suitable for complex queries, multi-row
                  transactions.
                </td>
                <td className="px-4 py-3">
                  NoSQL is best suited for unstructured data or documents. Not
                  ideal for complex queries.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  Databases that support SQL require powerful hardware to
                  support vertical scaling.
                </td>
                <td className="px-4 py-3">
                  NonSQL databases require commodity hardware for horizontal
                  scaling.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL enables ACID(atomicity, consistency, isolation, and
                  durability) properties
                </td>
                <td className="px-4 py-3">
                  NonSQL follows CAP (consistency, availability, partition
                  tolerance) properties.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  {' '}
                  SQL does not support hierarchical storage of data.
                </td>
                <td className="px-4 py-3">
                  NoSQL is best suited for hierarchical storage of data.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL databases can only be run on a single system and hence,
                  does not follow distribution of data.
                </td>
                <td className="px-4 py-3">
                  NoSQL databases are designed to follow data distribution
                  features like repetition, partition.
                </td>
              </tr>
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3">
                  SQL supports databases like MySQL, SQL Server, Oracle, etc.
                </td>
                <td className="px-4 py-3">
                  Nosql databases are Hbase, MongoDB, Redis, etc.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article className="my-8">
        <h2 className="font-bold text-xl">
          What is <code>JWT</code>? and how does it work?
        </h2>
        <h3 className="font-bold">What Is JWT?</h3>
        <p>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <h3 className="font-bold">How does it work?</h3>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you
          will get two JSON strings: The header and the payload. The signature.
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm. The payload
          contains the claims. This is displayed as a JSON string, usually
          containing no more than a dozen fields to keep the JWT compact. This
          information is typically used by the server to verify that the user
          has permission to perform the action they are requesting. There are no
          mandatory claims for a JWT, but overlaying standards may make claims
          mandatory. For example, when using JWT as bearer access token under
          OAuth2.0, iss, sub, aud, and exp must be present. some are more common
          than others. The signature ensures that the token hasn’t been altered.
          The party that creates the JWT signs the header and payload with a
          secret that is known to both the issuer and receiver, or with a
          private key known only to the sender. When the token is used, the
          receiving party verifies that the header and payload match the
          signature.{' '}
        </p>
      </article>
      <article className="my-8">
        <h1 className="font-bold text-xl">
          What are the difference between Node.JS and Javascript?
        </h1>
        <p className="mt-4">
          1. NodeJS : NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.{' '}
        </p>
        <p className="mt-4">
          2. JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </article>
      <article className="my-8">
        <h2 className="font-bold text-xl">
          How does Node JS handle multiple requests at the same time?
        </h2>

        <p className="mt-4">
          We know NodeJS application is single-threaded. Say, if processing
          involves request A that takes 10 seconds, it does not mean that a
          request which comes after this request needs to wait 10 seconds to
          start processing because NodeJS event loops are only single-threaded.
          The entire NodeJS architecture is not single-threaded.
        </p>
        <h3 className="mt-4 font-bold">
          How NodeJS handle multiple client requests?
        </h3>
        <p className="mt-4">
          {' '}
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </article>
    </section>
  );
};

export default Blog;
