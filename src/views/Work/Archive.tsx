const Archive: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      This is the archive <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Archive;
