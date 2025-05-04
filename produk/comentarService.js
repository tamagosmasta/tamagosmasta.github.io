export const comentarService = {
    getComentar: async function () {
        try {
            const url = `${window.config.api}?sheetName=${window.config.sheetName}`;
            const response = await fetch(url);

            // karena response berupa JSON
            return await response.json();
        } catch (error) {
            return { error: error?.message || "Gagal mengambil komentar" };
        }
    },

    addComentar: async function ({ id, name, status, message, date, color }) {
        const comentar = {
            id,
            name,
            status,
            message,
            date,
            color,
            sheetName: window.config.sheetName // kirim sheetName ke API
        };

        try {
            const response = await fetch(window.config.api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comentar)
            });

            return await response.json();
        } catch (error) {
            console.error("Post error:", error);
            return { error: error?.message || "Gagal menambahkan komentar" };
        }
    }
};
