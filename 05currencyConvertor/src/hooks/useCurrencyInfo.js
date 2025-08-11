
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Always lowercase for API compatibility
    const baseCurrency = currency.toLowerCase();
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setData(data[baseCurrency] || {}))
      .catch((err) => console.error("API fetch error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
