const DashboardCard = ({ tag, title, description, image, onClick }) => (
    <div
      onClick={onClick}
      className="p-6 border rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 transition"
    >
      {image && <div className="mb-4">{image}</div>}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <span className="text-sm font-medium text-blue-500">{tag}</span>
    </div>
  );
  

  export default DashboardCard;