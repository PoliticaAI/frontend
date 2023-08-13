import { Box } from "@mui/material";

const App = () => {
  return (
    <Box className="w-full h-full flex justify-center items-center bg-slate-900">
      <Box className="p-7 rounded-lg bg-blue-800 text-white text-4xl text-center">
        Tailwind CSS with MUI on Vite!
        <br />
        <span className="text-xl text-gray-400">wooo!!</span>
      </Box>
    </Box>
  );
}

export default App;
