type ApiResponse<T> = {
  ok: boolean;
  status: number;
  result?: T;
  message?: string;
};

const INTERNAL_API_URL = import.meta.env.VITE_INTERNAL_API_URL;

async function callApi<T>(
  url: string,
  config?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${INTERNAL_API_URL}/${url}`, {
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...(config?.headers || {}),
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    if (response.ok) {
      const data = await response.json();

      if ("result" in data) {
        return {
          ok: response.ok,
          status: response.status,
          result: {
            ...(data.result as T),
            ...data,
          },
        };
      } else {
        return { ok: response.ok, status: response.status };
      }
    } else {
      const data = await response.json();
      return {
        ok: response.ok,
        status: response.status,
        message: data.message,
      };
    }
  } catch (error) {
    console.log(error);

    const err = error as { status: number; message: string };

    return { ok: false, status: err.status, message: err.message };
  }
}

export default callApi;
