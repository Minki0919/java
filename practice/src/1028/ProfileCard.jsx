import React from "react";

function ProfileCard({ name, age, major }){
    return (
        <>
            <h1>저의 이름은,{name}입니다!</h1>
            <h2>저의 나이는,{age}입니다!</h2>
            <h3>저의 전공은,{major}입니다!</h3>
        </>
    );
}
export default ProfileCard;