import React, {useState } from 'react';
import './style/pr_4.css';

export default function Pr4() {
    const [display, setDisplay] = useState({
        uName: '',
        uEmail: '',
        uComment: '',
        rating: 0,
    });

    const [allComments, setAllComments] = useState(JSON.parse(localStorage.getItem('allComments')) || []);

    const submitHandler = (e) => {
        e.preventDefault();

        let uName = e.target.uName.value;
        let uEmail = e.target.uEmail.value;
        let uComment = e.target.uComment.value;
        let rating = display.rating;

        let data = {
            uName,
            uEmail,
            uComment,
            rating,
        };

        setAllComments([...allComments, data]);
        localStorage.setItem('allComments', JSON.stringify([...allComments, data]));

        alert('Thank You For Your Valuable Comment');

        e.target.uName.value = '';
        e.target.uEmail.value = '';
        e.target.uComment.value = '';
        setDisplay({ uName: '', uEmail: '', uComment: '', rating: 0 });
    };

    const clearAllComments = () => {
        localStorage.removeItem('allComments');
        setAllComments([]);
    };

    const handleRatingChange = (newRating) => {
        setDisplay({ ...display, rating: newRating });
    };

    const Pr_4 = (
        <>
            <div className="container">
                <div className="InputBox">
                    <div className="title">Your Review</div>

                    <form onSubmit={submitHandler}>
                        <div className="user__details">
                            <div className="input__box">
                                <label className="details">Full Name</label>
                                <input id="uName" className="input" type="text" placeholder="E.g: John Smith" required />
                            </div>
                            <div className="input__box">
                                <label className="details">Email</label>
                                <input id="uEmail" className="input" type="email" placeholder="johnsmith@hotmail.com" required />
                            </div>

                            <div className="input__box2">
                                <label className="details">Comment</label>
                                <textarea id="uComment" className="input input2" placeholder="Enter Your comment" rows="6" required></textarea>
                            </div>

                            <div className="input__box2">
                                <div className="rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={star <= display.rating ? 'filled' : ''}
                                            onClick={() => handleRatingChange(star)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="button">
                            <input type="submit" value="Comment" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="container">
                <div className="InputBox">
                    <div className="title">
                        <span>All User Reviews</span>
                        <button onClick={clearAllComments} className="clear-button">
                            Clear All Comments
                        </button>
                    </div>
                    {allComments.map((user, index) => (
                        <div key={index} className="card">
                            <div className="flex justify-between">
                                <h3 className="userName">{user.uName}</h3>
                                <span className="userEmail">{user.uEmail}</span>
                            </div>
                            <p className="userComment">{user.uComment}</p>
                            <div className="userRating">Rating: {user.rating} ★</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    return Pr_4;
}
