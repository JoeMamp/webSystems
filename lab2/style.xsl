<?xml version="1.0" encoding="UTF-8"?>
<body style="font-family:Arial;font-size:12pt">
<xsl:for-each select="Playlist/track">
  <div>
    <span style="font-weight:bold"><xsl:value-of select="name"/> by - </span>
    <xsl:value-of select="artist"/>
  </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
    <xsl:value-of select="date"/>
    <span style="font-style:italic"> (Released <xsl:value-of select="date"/>, Genres: <xsl:value-of select="genres"/>)</span>
    </p>
  </div>
</xsl:for-each>
</body>
</html>