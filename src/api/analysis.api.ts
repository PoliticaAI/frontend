const API_URL = "http://localhost:5000/";

export const startAnalysis = (url: string) => {
  return fetch(API_URL + "start_analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("process_id", data.process_id);

      return data;
    });
};

export const checkAnalysisStatus = () => {
  const process_id = localStorage.getItem("process_id");
  if (!process_id) {
    return Promise.reject("Process ID not found");
  }

  return fetch(API_URL + `status/${process_id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
