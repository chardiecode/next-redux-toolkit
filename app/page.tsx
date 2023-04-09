"use client";

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, increment } from "@/global_state/slices/userSlice";
import { AppDispatch, RootState } from "@/global_state/store/store";

export default function Home() {
  const userRef = useRef(false);
  const { entities, isLoading, isRejected, count } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchUsers());
    }
    return () => {
      userRef.current = true;
    };
  }, []);
  return (
    <main>
      {isRejected ? <p>Rejected</p> : null}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        entities?.map((user: any) => <h3 key={user.id}>{user.name}</h3>)
      )}
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Click on me</button>
    </main>
  );
}
