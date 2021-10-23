// Given an array of count-paired domains cpdomains,
// return an array of the count-paired domains of each subdomain in the input.
// You may return the answer in any order.

// Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
// For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

var subdomainVisits = function(cpdomains) {
    let subDomainHashmap = {};
    for(let i = 0; i < cpdomains.length; i++){
        let count = cpdomains[i].split(" ")[0];
        let subDomains = cpdomains[i].split(" ").pop().split(".");
        // ["d1", "d2", "d3"] || ["d1", "d2"]
        let subDomainsFinalArr = [];
        if(subDomains.length === 3){
            subDomainsFinalArr.push(`${subDomains[0]}.${subDomains[1]}.${subDomains[2]}`);
            subDomainsFinalArr.push(`${subDomains[1]}.${subDomains[2]}`);
            subDomainsFinalArr.push(`${subDomains[2]}`);
        }
        if(subDomains.length === 2){
            subDomainsFinalArr.push(`${subDomains[0]}.${subDomains[1]}`);
            subDomainsFinalArr.push(`${subDomains[1]}`);
        }
        console.log(subDomainsFinalArr);
        for(let j = 0; j < subDomainsFinalArr.length; j++){
            if(subDomainHashmap[subDomainsFinalArr[j]]){
                subDomainHashmap[subDomainsFinalArr[j]] += Number(count);
            } else {
                subDomainHashmap[subDomainsFinalArr[j]] = Number(count);
            }
        }
    }
    let outputArr = [];
    for(let i in subDomainHashmap){
        outputArr.push(`${subDomainHashmap[i]} ${i}`);
    }
    return outputArr;
};
subdomainVisits(["9001 discuss.leetcode.com"]);
subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]);