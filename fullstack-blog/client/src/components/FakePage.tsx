"use client";

import { getProfile } from "@/redux/actions/user.action";
import { selectUser } from "@/redux/reducers/user.slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useRef } from "react";

function FakePage() {
	const dispatch = useAppDispatch();
	const sUser = useAppSelector(selectUser).me;
	const isSendRequest = useRef<boolean>(false);

	useEffect(() => {
		async function getCurrentUser() {
			const token = await localStorage.getItem("token");
			if (token || sUser?._id) {
				dispatch(getProfile());

				isSendRequest.current = true;
			}
		}

		!isSendRequest.current && getCurrentUser();
	}, [dispatch, sUser]);

	return <></>;
}

export default React.memo(FakePage);
