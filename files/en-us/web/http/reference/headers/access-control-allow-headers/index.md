---
title: Access-Control-Allow-Headers header
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
page-type: http-header
browser-compat: http.headers.Access-Control-Allow-Headers
sidebar: http
---

The HTTP **`Access-Control-Allow-Headers`** {{Glossary("response header")}} is used in response to a {{Glossary("preflight request")}} to indicate the HTTP headers that can be used during the actual request.
This header is required if the preflight request contains {{HTTPHeader("Access-Control-Request-Headers")}}.

> [!NOTE]
> The {{glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} are always allowed and usually aren't listed in `Access-Control-Allow-Headers` unless there is a need to circumvent the [additional safelist restrictions](/en-US/docs/Glossary/CORS-safelisted_request_header#additional_restrictions).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Headers: <header-name>
Access-Control-Allow-Headers: <header-name>, <header-name>
Access-Control-Allow-Headers: *
```

## Directives

- `<header-name>`
  - : The name of a supported request header. The header may list any number of headers, separated by commas.
- `*` (wildcard)
  - : Any header.
    The value `*` only counts as a special wildcard value for requests without credentials (requests without [HTTP cookies](/en-US/docs/Web/HTTP/Guides/Cookies) or HTTP authentication information).
    In requests with credentials, it is treated as the literal header name `*` without special semantics.
    The {{HTTPHeader("Authorization")}} header doesn't accept wildcard and always needs to be listed explicitly.

## Examples

### Implementing a custom header

Below is an example of an `Access-Control-Allow-Headers` header.
It indicates that a custom header named `X-Custom-Header` is supported by CORS requests to the server, in addition to the {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}}.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Supporting multiple headers

This example shows `Access-Control-Allow-Headers` when it specifies support for multiple headers.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Bypassing additional restrictions on CORS-safelisted headers

Although {{glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} are always allowed and don't usually need to be listed in `Access-Control-Allow-Headers`, listing them anyway will circumvent the [additional restrictions](/en-US/docs/Glossary/CORS-safelisted_request_header#additional_restrictions) that apply.

```http
Access-Control-Allow-Headers: Accept
```

### Handling preflight requests

Let's look at an example of a {{glossary("preflight request")}} involving `Access-Control-Allow-Headers`.

#### Request

First, the preflight request is an {{HTTPMethod("OPTIONS")}} request that includes some combination of the three preflight request headers: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, and {{HTTPHeader("Origin")}}.

The preflight request below tells the server that we want to send a CORS `GET` request with the headers listed in {{HTTPHeader("Access-Control-Request-Headers")}} ({{HTTPHeader("Content-Type")}} and `X-Requested-With`).

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://foo.bar.org
```

#### Response

If the CORS request indicated by the preflight request is authorized, the server will respond to the preflight request with a message that indicates the allowed origin, methods, and headers. Below, we see that `Access-Control-Allow-Headers` includes the headers that were requested.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

If the requested method isn't supported, the server will respond with an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
