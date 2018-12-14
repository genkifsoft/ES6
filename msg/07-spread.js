let courWeb = {0:'PHP', 1:'ASP', 2:'WORDPRESS'};

let courMobile = {0:'IOS', 1:'ANDROID'};

let course = ['HTML', 'CSS', courWeb, 'WINDOWPHONE', courMobile];

let data = [];
console.log(course);
for(let i in course)
{
    console.log(Object.keys(course[2]).length);
    if (typeof(course[i]) == 'object')
    {
        let size = Object.keys(course[i]).length;
        for(let j = 0; j < size; j++)
        {
            data.push(course[i][j]);
        }
    } else {
        data.push(course[i]);
    }
}
console.log(data);