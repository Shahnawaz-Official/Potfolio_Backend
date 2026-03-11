const Project = require("../model/project.model")

async function getAllproject(req,res){
        try {
            const project = await Project.find({})
            res.status(200).json({
                message:"All Project Fetch Successfully ",
                project
            })
        } catch (error) {
            console.log("Get all project Error ",error);
            res.status(500).json({
                success: false,
                message:"Project Fatch Server Error ",
                error
            })
        }
            
        
}

module.exports = {
    getAllproject
}