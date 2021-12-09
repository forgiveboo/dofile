import DateUtils from "@/utils/date/DateUtils";
import { initialize } from "@/redux/getters/task";
import ObjectId from "@/libs/ObjectId";
import { getDefaultDueDate, getDefaultPriority, generateReminders } from "@/service/preference";
import { getNewTaskSortOrder } from "@/service/task";
import { addTask as daoAddTask } from "@/dao/task";
import * as Toast from "@/modules/Toast";

export function addTask(
    title: string = "",
    content: string = "",
    selectionText: string = "",
    url: string = ""
) {
    const { title: taskTitle, content: taskContent } = compatibleTitleAndContent(
        title,
        content,
        selectionText,
        url
    );
    const serverDateString = DateUtils.formatToServerDate(new Date());
    const sortOrder = getNewTaskSortOrder();
    const task = initialize({
        id: ObjectId(),
        startDate: null,
        dueDate: getDefaultDueDate(),
        priority: getDefaultPriority(),
        isAllDay: true,
        reminders: generateReminders(true).toJS(),
        modifiedTime: serverDateString,
        createdTime: serverDateString,
        isNew: true,
        title: taskTitle,
        content: taskContent,
        sortOrder
    });
    daoAddTask(task);
    const { i18n } = browser;
    Toast.show({ text: i18n.getMessage("addTaskToInboxSuccess") });
}

function compatibleTitleAndContent(
    title: string = "",
    content: string = "",
    selectionText: string = "",
    url: string = ""
) {
    const textData = {
        title: "",
        content: ""
    };

    if (selectionText) {
        textData.title = selectionText;
        textData.content = [[title, content].filter(text => !!text).join("\n"), url]
            .filter(text => !!text)
            .join("\n\n");
    } else {
        textData.title = title;
        textData.content = [content, url].filter(text => !!text).join("\n\n");
    }

    return textData;
}
