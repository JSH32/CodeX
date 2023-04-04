function deflate(e) {
  return pako.deflateRaw(e, { level: 9 });
}
function inflate(e) {
  return pako.inflateRaw(e);
}
function encode(e) {
  return deflate(new TextEncoder("utf-8").encode(e));
}
function arrToB64(e) {
  var t = "";
  return (
    e.forEach((e) => (t += String.fromCharCode(e))),
    btoa(t).replace(/\+/g, "@").replace(/=+/, "")
  );
}
function b64ToArr(e) {
  return new Uint8Array(
    [...atob(decodeURIComponent(e).replace(/@/g, "+"))].map((e) =>
      e.charCodeAt()
    )
  );
}
function byteStringToByteArray(e) {
  for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return (t.head = 0), t;
}
function textToByteString(e) {
  return window.unescape(window.encodeURIComponent(e));
}
function byteStringToText(e) {
  return window.decodeURIComponent(window.escape(e));
}
function byteArrayToByteString(e) {
  var t = "";
  return (
    e.forEach(function (e) {
      t += String.fromCharCode(e);
    }),
    t
  );
}
function byteStringToBase64(e) {
  return window.btoa(e).replace(/\+/g, "@").replace(/=+/, "");
}
var fieldSeparator = "ÿ",
  startOfExtraFields = "þ",
  TIO = {
    run: async function (e, t, r) {
      const n = new TextEncoder("utf-8");
      var o =
        "Vlang\x001\0" +
        r +
        "\0F.code.tio\0" +
        n.encode(e).length +
        "\0" +
        e +
        "F.input.tio\0" +
        n.encode(t).length +
        "\0" +
        t +
        "Vargs\x000\0R";
      o = encode(o);
      var a = await fetch("https://tio.run/cgi-bin/run/api/", {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: o,
        }),
        i = (await a.body.getReader().read()).value,
        c = new TextDecoder("utf-8").decode(i);
      return c.slice(16).split(c.slice(0, 16));
    },
    makeLink: function (
      e,
      t = "",
      r = "",
      n = "",
      o = "",
      a = [],
      i = [],
      c = !0
    ) {
      var d = e,
        u = function (e) {
          d += fieldSeparator + textToByteString(e);
        };
      return (
        [t, r, n, o, ...a].forEach(u),
        i.length && ((d += startOfExtraFields + "options"), i.forEach(u)),
        (c ? "https://tio.run/##" : "") +
          arrToB64(deflate(byteStringToByteArray(d)))
      );
    },
    parseLink: function (e) {
      "https://tio.run/##" === e.slice(0, 18) && (e = e.slice(18));
      var t = (t = byteArrayToByteString(inflate(b64ToArr(e))).split(
          startOfExtraFields
        )).map((e) => e.split(fieldSeparator)),
        [r, n, o, a, i, ...c] = t[0];
      [n, o, a, i, ...c] = [n, o, a, i, ...c].map((e) => byteStringToText(e));
      var d = [];
      return (
        t.length > 1 && (d = t[1].slice(1)),
        {
          languageId: r,
          header: n,
          code: o,
          footer: a,
          input: i,
          args: c,
          options: d,
        }
      );
    },
  };
