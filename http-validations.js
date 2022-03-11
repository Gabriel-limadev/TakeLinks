import fetch from "node-fetch";

function handlesError(error){
    throw new Error(error.message);
}

// Check and return status of all links in arrayUrls
async function checkStatus(arrayUrls){
    try{
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
            const res = await fetch(url);
            return res.status;
        }))
        return arrayStatus;
    }catch(error){
        handlesError(error)
    }

}

// Return just links, using method map
function makeArrayUrls(arrayLinks){
    return arrayLinks
    .map(objectlink => Object
        .values(objectlink).join());
}

// Return the results: Array with links and status
export async function validateUrls(arrayLinks){
    const links = makeArrayUrls(arrayLinks);
    const statusLinks = await checkStatus(links);

    const results = arrayLinks
        .map((object, index) => ({
            ...object, 
            status: statusLinks[index]
        }))
    return results
}