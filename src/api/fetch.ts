interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  try {
    response.parsedBody = await response.json();
  } catch (ex) {
    console.log(ex);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export async function HttpGet<T>(
  path: string,
  args: RequestInit = { method: 'get' },
): Promise<HttpResponse<T>> {
  return http<T>(new Request(path, args));
}
