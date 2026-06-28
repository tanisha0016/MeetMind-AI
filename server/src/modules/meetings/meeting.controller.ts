import { Request, Response, NextFunction } from "express";
import { createMeeting, getMeetings, getMeetingById, deleteMeeting, updateMeeting } from "./meeting.service";
import { MEETING_MESSAGES } from "./meeting.constants";
import { ParamsDictionary } from "express-serve-static-core";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const meeting = await createMeeting(
      req.body,
      req.user!.userId,
    );

    res.status(201).json({
      success: true,
      message: MEETING_MESSAGES.CREATED,
      data: meeting,
    });
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const meetings = await getMeetings(req.user!.userId);
        res.json({
            success: true,
            message: MEETING_MESSAGES.FETCHED,
            data: meetings,
        });
    } catch (error) {
        next(error);
    }
};

export const getOne = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const meeting = await getMeetingById(
      req.params.id,
      req.user!.userId,
    );

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: MEETING_MESSAGES.NOT_FOUND,
      });
    }

    res.json({
      success: true,
      data: meeting,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req:Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const meeting = await deleteMeeting(
      req.params.id,
      req.user!.userId,
    );

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: MEETING_MESSAGES.NOT_FOUND,
      });
    }

    res.json({
      success: true,
      message: MEETING_MESSAGES.DELETED,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const meeting = await updateMeeting(
      req.params.id,
      req.user!.userId,
      req.body,
    );

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: MEETING_MESSAGES.NOT_FOUND,
      });
    }

    res.json({
      success: true,
      message: MEETING_MESSAGES.UPDATED,
      data: meeting,
    });
  } catch (error) {
    next(error);
  }
};