DivWiki
=======

DivWiki is a platform for read documentation and wiki. Based on XUL Runner. With DivWiki you can read your wikis and documentation online. The wiki text can be Markdown or HTML. Already wikis published on the net can be showed on DivWiki.

Adapt a Markdown wiki from BitBucket or GitHub
==============================================

First create a WIKI.XML at the top of the Wiki. It should be like that:
```
<wiki>
  <name></name>
  <description></description>
  <icon></icon>
  <homepage></homepage>
  <home-wiki></home-wiki>
  <markdown>true</markdown>
</wiki>
```
Fill the form and DivWiki do the rest. Later tell the user the URL of the WIKI.XML

Adapt a current published Wiki or Doxygen
=========================================
File->Visit wiki...
And fill the Home page of the wiki
