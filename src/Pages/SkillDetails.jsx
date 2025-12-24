import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../Components/SkillDetailsCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BookSessionForm from "../Components/BookSessionForm";

const SkillDetails = () => {
  const skills = useLoaderData();
  const { id } = useParams();

  const skill = skills.find((s) => s.skillId.toString() === id);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="max-w-4xl mx-auto my-10">
        <SkillDetailsCard skill={skill} />
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SkillDetails;
